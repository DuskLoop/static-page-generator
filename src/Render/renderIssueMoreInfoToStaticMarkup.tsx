import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import fetch from 'node-fetch';
import fs from 'fs';

import { IJiraIssue } from '../Common/jiraIssue';
import { IssueMoreInfo } from './Components/IssueMoreInfo';
import paths from '../../config/paths';
import { jiraUrl, jiraApiKey } from '../Jira/jiraConfig';
import { getOutputFolderPath } from '../FileSystem/outputFolder';

const downloadImage = (src: string, fileName: string) => {
  const folderPath = `${getOutputFolderPath()}/images`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const url = `${jiraUrl}${src}`;

  fetch(url, {
    headers: {
      Authorization: `Basic ${jiraApiKey}`,
    },
  }).then(res => {
    const file = fs.createWriteStream(`${folderPath}/${fileName}`);
    res.body.pipe(file);
  });
};

const replaceImagesSrc = (markup: string, startIndex: number = 0): string => {
  const searchStart = '<img src="';
  const searchEnd = '"';

  let start = markup.indexOf(searchStart, startIndex);
  if (start === -1) {
    return markup;
  }

  start = start + searchStart.length;

  let end = markup.indexOf(searchEnd, start);

  const src = markup.substring(start, end);
  const fileName = src.substring(src.lastIndexOf('/') + 1);

  downloadImage(src, fileName);

  const newMarkupWithSrcReplaced = markup.replace(src, `../images/${fileName}`);

  start = markup.indexOf(searchStart, startIndex);
  end = markup.indexOf('"', start);
  return replaceImagesSrc(newMarkupWithSrcReplaced, end);
};

export const renderIssueMoreInfoToStaticMarkup = (issue: IJiraIssue) => {
  const bodyStaticMarkup = renderToStaticMarkup(
    <IssueMoreInfo issue={issue} />
  );

  const bodyStaticMarkupWithImagesReplaced = replaceImagesSrc(bodyStaticMarkup);

  let template = '';
  try {
    template = fs.readFileSync(
      `${paths.appTemplates}/moreInfoTemplate.html`,
      'utf8'
    );
  } catch (error) {
    console.log(error);
  }

  const moreInfoStaticMarkup = template
    .replace('${title}', issue.key)
    .replace('${body}', bodyStaticMarkupWithImagesReplaced);

  return moreInfoStaticMarkup;
};
