import open from 'open';
import inquirer from 'inquirer';

import { renderIssuesToStaticMarkup } from './Render/renderIssues';
import { validateIssues } from './Jira/validateIssues';
import { saveStaticMarkupToFile } from './FileSystem/saveMarkupToFile';
import { groupIssues, getJiraIssues } from './Jira/getJiraIssues';
import { mockedIssues } from './issuesMock';
import { IUserInput } from './Jira/jiraConfig';
import { getUserInputFromCLI } from './CLI/cli';
import { isProduction } from './Common/utils';
import { generateSubpages } from './Utils/generateSubpages';
import { getFolderPath } from './FileSystem/outputFolder';

const generateChangelog = async (userInput: IUserInput): Promise<string> => {
  getFolderPath(userInput.version.name);
  // const jiraIssues =
  //   process.env.USE_MOCKED_ISSUES === 'Y'
  //     ? mockedIssues
  //     : await getJiraIssues(userInput);
  const jiraIssues = await getJiraIssues(userInput);

  validateIssues(jiraIssues);
  generateSubpages(jiraIssues);

  const issueGroups = groupIssues(jiraIssues);

  issueGroups.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  // const gasIssueGroups = issueGroups.filter();

  const staticMarkup = renderIssuesToStaticMarkup(
    issueGroups,
    userInput.version.releaseDate,
    userInput.version.name
  );

  return saveStaticMarkupToFile(staticMarkup);
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
  generateChangelog({
    version: {
      name: '2020.1.1',
      id: '1234',
      releaseDate: '2020-01-12',
      released: false,
    },
  });
}
