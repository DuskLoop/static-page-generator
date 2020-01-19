import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { IJiraIssue } from '../Common/jiraIssue';
import { IssueMoreInfo } from './Components/IssueMoreInfo';
import fs from 'fs';
import paths from '../../config/paths';

export const renderIssueMoreInfoToStaticMarkup = (issue: IJiraIssue) => {
  const bodyStaticMarkup = renderToStaticMarkup(
    <IssueMoreInfo issue={issue} />,
  );

  const template = fs.readFileSync(paths.moreInfoTemplate, 'utf8');

  const moreInfoStaticMarkup = template
    .replace('${title}', issue.key)
    .replace('${body}', bodyStaticMarkup);

  return moreInfoStaticMarkup;
};
