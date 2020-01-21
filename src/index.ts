import open from 'open';
import inquirer from 'inquirer';

import { renderIssuesToStaticMarkup } from './Render/renderIssues';
import { validateIssues } from './Jira/validateIssues';
import { saveStaticMarkupToFile } from './FileSystem/saveMarkupToFile';
import {
  groupIssues,
  getJiraIssues,
  defaultIssueGroup,
} from './Jira/getJiraIssues';
import { mockedIssues } from './issuesMock';
import { IUserInput } from './Jira/jiraConfig';
import { getUserInputFromCLI } from './CLI/cli';
import { isProduction } from './Common/utils';
import { generateSubpages } from './Utils/generateSubpages';
import {
  getOutputFolderPath,
  setOutputFolderPath,
} from './FileSystem/outputFolder';
import { gasSubsystemIds } from './Jira/jiraConfig';
import IssueGroup from './Render/Components/IssueGroup';
import { IJiraIssue } from './Common/jiraIssue';
import ncp from 'ncp';
import paths from '../config/paths';
import path from 'path';
import fs from 'fs';

const generateChangelog2 = async (
  userInput: IUserInput,
  issues: IJiraIssue[],
  gas: boolean
): Promise<string> => {
  setOutputFolderPath(userInput.version.name, gas);

  generateSubpages(issues);

  const allIssueGroups = groupIssues(issues);

  allIssueGroups.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  const staticMarkup = renderIssuesToStaticMarkup(
    allIssueGroups,
    userInput.version.releaseDate,
    userInput.version.name
  );

  return saveStaticMarkupToFile(staticMarkup);
};

const generateChangelog = async (userInput: IUserInput): Promise<string> => {
  // const jiraIssues =
  //   process.env.USE_MOCKED_ISSUES === 'Y'
  //     ? mockedIssues
  //     : await getJiraIssues(userInput);
  const allIssues = await getJiraIssues(userInput);

  validateIssues(allIssues);

  if (isProduction()) {
    console.log('Genererar ändringslogg för GAS');

    const gasIssues = allIssues.filter(
      issue =>
        issue.fields.customfield_10037 == null ||
        gasSubsystemIds.includes(issue.fields.customfield_10037.id)
    );

    const gasPath = await generateChangelog2(userInput, gasIssues, true);
  }

  console.log('Genererar ändringslogg för icke-GAS');
  return generateChangelog2(userInput, allIssues, false);
};

const generateChangelogFromCLIInput = async () => {
  const userInput = await getUserInputFromCLI();

  const indexFilePath = await generateChangelog(userInput);

  await inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'open',
        message: 'Vill du öppna ändringsloggen i en webbläsare nu? (Icke GAS)',
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
