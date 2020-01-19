import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { IIssueGroup } from '../Common/jiraIssue';
import App from './Components/App';
import template from './template';

export const renderIssuesToStaticMarkup = (
  issueGroups: IIssueGroup[],
  releaseDate: string,
  version: string,
) => {
  const bodyStaticMarkup = renderToStaticMarkup(
    <App
      issueGroups={issueGroups}
      releaseDate={releaseDate}
      version={version}
    />,
  );

  const appStaticMarkup = template({
    body: bodyStaticMarkup,
    title: 'Ändringslogg',
  });

  return appStaticMarkup;
};
