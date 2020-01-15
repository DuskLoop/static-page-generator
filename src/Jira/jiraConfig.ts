import { fieldIds } from '../Common/jiraField';
import { IVersion } from './getVersions';

export interface IJiraConfig {
  jql: string;
  fields: string[];
}

const getJQL = (userInput: IUserInput): string =>
  `project in (EK, KF, GR) AND issuetype in (Hotfix, Story) AND fixVersion = ${userInput.version} AND statusCategory = 3 AND "To Changelog" = Ja`;

export const getJiraConfig = (userInput: IUserInput): IJiraConfig => {
  const jql = getJQL(userInput);

  return {
    jql,
    fields: [
      fieldIds.summary,
      fieldIds.description,
      fieldIds.showInChangeLog,
      fieldIds.changeLogSummary,
      fieldIds.changeLogDescription,
      fieldIds.components,
    ],
  };
};

export const jiraApiBaseUrl = 'http://eniacdata.atlassian.net/rest/api/3/';

export const jiraApiKey =
  'ZGFuaWVsLmhpbGRlc3NvbkBlbmlhYy5zZTo4ZmJBYTNrNXJjZkFhU0tYSFNRU0YxREI=';

export interface IUserInput {
  version: string;
}
