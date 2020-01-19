import { fieldIds } from '../Common/jiraField';
import { IJiraVersion } from './getVersions';

export interface IJiraConfig {
  jql: string;
  fields: string[];
}

enum Subsystem {
  Anläggningsredovisning = 'Anläggningsredovisning',
  Bisättningsjournal = 'Bisättningsjournal',
  Bokning = 'Bokning',
  Ekonomi = 'Ekonomi',
  Grav = 'Grav',
  Kremationsjournal = 'Kremationsjournal',
  Kundreskontra = 'Kundreskontra',
  Leverantörsreskontra = 'Leverantörsreskontra',
  Musik = 'Musik',
  'Order/Fakturering' = 'Order/Fakturering',
}

const gasSubsystems = [
  Subsystem.Anläggningsredovisning,
  Subsystem.Ekonomi,
  Subsystem.Kundreskontra,
  Subsystem.Leverantörsreskontra,
  Subsystem['Order/Fakturering'],
];

const getJQL = (userInput: IUserInput): string =>
  `project in (EK, KF, GR) AND issuetype in (Hotfix, Story) AND fixVersion = ${userInput.version.name} AND statusCategory = 3 AND "To Changelog" = Ja`;

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
      fieldIds.subsystem,
      fieldIds.moreInfo,
    ],
  };
};

export const jiraApiBaseUrl = 'http://eniacdata.atlassian.net/rest/api/3/';

export const jiraApiKey =
  'ZGFuaWVsLmhpbGRlc3NvbkBlbmlhYy5zZTo4ZmJBYTNrNXJjZkFhU0tYSFNRU0YxREI=';

export interface IUserInput {
  version: IJiraVersion;
}
