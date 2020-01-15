import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { IJiraIssue, IIssueGroup } from '../Common/jiraIssue';
import App from './Components/App';
import template from './template';

export const renderIssuesToStaticMarkup = (issueGroups: IIssueGroup[]) => {
  const bodyStaticMarkup = renderToStaticMarkup(
    <App issueGroups={issueGroups} />
  );

  const appStaticMarkup = template({
    body: bodyStaticMarkup,
    title: 'Ändringslogg',
  });

  return appStaticMarkup;
};
