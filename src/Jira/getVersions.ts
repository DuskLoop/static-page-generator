import fetch from 'node-fetch';
import { jiraApiKey, jiraApiBaseUrl } from './jiraConfig';

interface IJiraVersion {
  id: string;
  name: string;
  released: boolean;
  releaseDate: string;
}

export interface IVersion {
  name: string;
  value: string;
}

export const versionCompareFunction = (
  versionA: IJiraVersion,
  versionB: IJiraVersion
): number => {
  return (
    new Date(versionB.releaseDate).getTime() -
    new Date(versionA.releaseDate).getTime()
  );
};

export const getVersions = async (): Promise<IJiraVersion[]> => {
  return fetch(`${jiraApiBaseUrl}/project/GR/versions`, {
    headers: {
      Authorization: `Basic ${jiraApiKey}`,
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};
