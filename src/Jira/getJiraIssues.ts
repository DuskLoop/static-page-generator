import { IJiraIssue, IIssueGroup } from '../Common/jiraIssue';
import {
  getJiraConfig,
  IUserInput,
  jiraApiKey,
  jiraApiBaseUrl,
} from './jiraConfig';
import fetch from 'node-fetch';

const getJiraUrl = (userInput: IUserInput, startAt: number) => {
  const jiraConfig = getJiraConfig(userInput);
  return `${jiraApiBaseUrl}/search?jql=${jiraConfig.jql}&fields=${jiraConfig.fields}&startAt=${startAt}&expand=renderedFields`;
};

const fetchAndParse = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Basic ${jiraApiKey}`,
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.text())
    .then(body => JSON.parse(body));

const getJiraIssuesPage = async (
  userInput: IUserInput,
  issues: IJiraIssue[],
  startAt: number,
  resolve: (value: IJiraIssue[] | PromiseLike<IJiraIssue[]>) => void,
  reject: (reason?: any) => void,
) => {
  const jiraUrl = getJiraUrl(userInput, startAt);

  const res = await fetchAndParse(jiraUrl);

  const retrievedIssues: IJiraIssue[] = [...issues, ...res.issues];

  if (res.total > res.maxResults + res.startAt) {
    const startAt = res.startAt + res.maxResults;
    getJiraIssuesPage(userInput, retrievedIssues, startAt, resolve, reject);
  } else {
    resolve(retrievedIssues);
  }
};

export const getJiraIssues = async (
  userInput: IUserInput,
): Promise<IJiraIssue[]> => {
  const issues = await new Promise<IJiraIssue[]>((resolve, reject) => {
    getJiraIssuesPage(userInput, [], 0, resolve, reject);
  }).catch(err => {
    console.error(err);
  });

  if (issues == null) {
    return [];
  } else {
    return issues;
  }
};

const findIssueGroupIndex = (title: string, issueGroups: IIssueGroup[]) =>
  issueGroups.findIndex(issueGroup => issueGroup.title === title);

export const groupIssues = (issues: IJiraIssue[]): IIssueGroup[] => {
  return issues.reduce<IIssueGroup[]>((issueGroups, currentIssue) => {
    let newIssueGroups: IIssueGroup[] | undefined;

    const firstComponent = currentIssue.fields.components[0];

    const title = firstComponent != null ? firstComponent.name : 'Övrigt';

    const groupIndex = findIssueGroupIndex(title, issueGroups);

    if (groupIndex === -1) {
      newIssueGroups = [...issueGroups, { title, issues: [currentIssue] }];
    } else {
      newIssueGroups = [...issueGroups];
      newIssueGroups[groupIndex].issues = [
        ...newIssueGroups[groupIndex].issues,
        currentIssue,
      ];
    }

    return newIssueGroups;
  }, []);
};

export const getJiraIssueGroups = async (
  userInput: IUserInput,
): Promise<IIssueGroup[]> => {
  const issues = await getJiraIssues(userInput);

  return groupIssues(issues);
};
