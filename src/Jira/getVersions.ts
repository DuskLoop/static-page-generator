import fetch from 'node-fetch';
import { jiraApiKey, jiraApiBaseUrl } from './jiraConfig';

export interface IJiraVersion {
  id: string;
  name: string;
  released: boolean;
  releaseDate: string;
}

export const versionCompareFunction = (
  versionA: IJiraVersion,
  versionB: IJiraVersion,
): number => {
  return (
    new Date(versionB.releaseDate).getTime() -
    new Date(versionA.releaseDate).getTime()
  );
};

const projects = ['GR', 'EK', 'KF'];

/**
 * Fetches versions from all projects and merges based on name
 */
export const getVersions = async (): Promise<IJiraVersion[]> => {
  const projectVersionPromises: Promise<IJiraVersion[]>[] = projects.map(
    project => {
      return fetch(`${jiraApiBaseUrl}/project/${project}/versions`, {
        headers: {
          Authorization: `Basic ${jiraApiKey}`,
          'Content-Type': 'application/json',
        },
      }).then(res => res.json());
    },
  );

  return Promise.all(projectVersionPromises).then(projectVersions => {
    const flattenedProjectVersions = projectVersions.reduce(
      (acc, val) => acc.concat(val),
      [],
    );

    return flattenedProjectVersions.reduce<IJiraVersion[]>(
      (versions, currentProjectVersions) => {
        const index = versions.findIndex(
          version => version.name === currentProjectVersions.name,
        );

        if (index === -1) {
          return [...versions, currentProjectVersions];
        } else {
          return versions;
        }
      },
      [],
    );
  });
};
