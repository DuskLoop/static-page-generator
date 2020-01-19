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
import { getVersions } from './Jira/getVersions';
import { IJiraIssue } from './Common/jiraIssue';
import { renderIssueMoreInfoToStaticMarkup } from './Render/renderIssueMoreInfoToStaticMarkup';
import { saveIssueMoreInfoStaticMarkupToFile } from './FileSystem/saveIssueMoreInfoStaticMarkupToFile';

const generateSubpage = (userInput: IUserInput, issue: IJiraIssue) => {
  const staticMarkup = renderIssueMoreInfoToStaticMarkup(issue);

  return saveIssueMoreInfoStaticMarkupToFile(
    userInput.version.name,
    staticMarkup,
    issue,
  );
};

const generateSubpages = (userInput: IUserInput, issues: IJiraIssue[]) => {
  issues.forEach((issue: IJiraIssue) => {
    if (issue.renderedFields.customfield_10038) {
      generateSubpage(userInput, issue);
    }
  });
};

const generateChangelog = async (userInput: IUserInput): Promise<string> => {
  // const jiraIssues =
  //   process.env.USE_MOCKED_ISSUES === 'Y'
  //     ? mockedIssues
  //     : await getJiraIssues(userInput);
  const jiraIssues = await getJiraIssues(userInput);

  validateIssues(jiraIssues);
  generateSubpages(userInput, jiraIssues);

  const issueGroups = groupIssues(jiraIssues);

  const staticMarkup = renderIssuesToStaticMarkup(
    issueGroups,
    userInput.version.releaseDate,
    userInput.version.name,
  );

  return saveStaticMarkupToFile(userInput.version.name, staticMarkup);
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
