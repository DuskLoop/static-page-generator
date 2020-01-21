import { fieldIds, IJiraSingleSelectValue } from '../Common/jiraField';
import { IJiraVersion } from './getVersions';

export interface IJiraConfig {
  jql: string;
  fields: string[];
}

const subsystemIds = {
  Anläggningsredovisning: '10007',
  Bisättningsjournal: '10008',
  Bokning: '10009',
  Ekonomi: '10010',
  Grav: '10011',
  Kremationsjournal: '10012',
  Kundreskontra: '10013',
  Leverantörsreskontra: '10014',
  Musik: '10015',
  'Order/Fakturering': '10016',
  Grundsystem: '10021',
  Budget: '10022',
  Diarium: '10023',
  Kremation: '10024',
  Systemadministration: '10025',
};

export const gasSubsystemIds = [
  subsystemIds.Anläggningsredovisning,
  subsystemIds.Ekonomi,
  subsystemIds.Kundreskontra,
  subsystemIds.Leverantörsreskontra,
  subsystemIds['Order/Fakturering'],
  subsystemIds.Grundsystem,
  subsystemIds.Budget,
  subsystemIds.Systemadministration,
];

export const platformIds = {
  windows: '10017',
  webAveny: '10018',
  nyaAveny: '10019',
  svenskaGravar: '10020',
};

export const getPlatformColorClassName = (platform: IJiraSingleSelectValue) => {
  if (platform.id === platformIds.windows) {
    return 'chip-color-orange';
  } else if (platform.id === platformIds.webAveny) {
    return 'chip-color-blue';
  } else if (platform.id === platformIds.nyaAveny) {
    return 'chip-color-teal';
  } else if (platform.id === platformIds.svenskaGravar) {
    return 'chip-color-purple';
  } else {
    return 'chip-color-orange';
  }
};

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
      fieldIds.platform,
    ],
  };
};

export const jiraUrl = 'http://eniacdata.atlassian.net';

export const jiraApiBaseUrl = `${jiraUrl}/rest/api/3/`;

export const jiraApiKey =
  'ZGFuaWVsLmhpbGRlc3NvbkBlbmlhYy5zZTo4ZmJBYTNrNXJjZkFhU0tYSFNRU0YxREI=';

export interface IUserInput {
  version: IJiraVersion;
}
