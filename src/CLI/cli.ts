import inquirer from 'inquirer';
import { IUserInput } from '../Jira/jiraConfig';
import { getVersions, versionCompareFunction } from '../Jira/getVersions';

export const getUserInputFromCLI = (): Promise<IUserInput> => {
  return getVersions().then(versions => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'version',
        message: 'Vilken version vill du bygga changelog för?',
        choices: [
          ...versions.sort(versionCompareFunction).map(version => version.name),
        ],
      },
    ]);
  });
};
