import { renderIssuesToStaticMarkup } from './Render/renderIssues';
import { validateIssues } from './Jira/validateIssues';
import { saveStaticMarkupToFile } from './FileSystem/saveMarkupToFile';
import { groupIssues, getJiraIssues } from './Jira/getJiraIssues';
import { mockedIssues } from './issuesMock';
import readline from 'readline';
import paths from '../config/paths';
import open from 'open';

import { IUserInput } from './Jira/jiraConfig';
import { getUserInputFromCLI } from './CLI/cli';
import { isProduction } from './Common/utils';
import inquirer from 'inquirer';

const generateChangelog = async (userInput: IUserInput): Promise<string> => {
  const jiraIssues =
    process.env.USE_MOCKED_ISSUES === 'Y'
      ? mockedIssues
      : await getJiraIssues(userInput);

  validateIssues(jiraIssues);

  const issueGroups = groupIssues(jiraIssues);

  const staticMarkup = renderIssuesToStaticMarkup(issueGroups);

  return saveStaticMarkupToFile(userInput.version, staticMarkup);
};

const generateChangelogFromCLIInput = async () => {
  const userInput = await getUserInputFromCLI();

  const indexFilePath = await generateChangelog(userInput);

  await inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'open',
        message: 'Vill du öppna ändringsloggen i en webbläsare nu?',
        default: true,
      },
    ])
    .then(input => {
      if (input.open) {
        open(indexFilePath);
      }
    });
};

if (isProduction()) {
  generateChangelogFromCLIInput();
} else {
  generateChangelog({ version: '2020.1.1' });
}
