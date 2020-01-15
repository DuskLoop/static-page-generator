import { renderIssuesToStaticMarkup } from './Render/renderIssues';
import { validateIssues } from './Jira/validateIssues';
import { saveStaticMarkupToFile } from './FileSystem/saveMarkupToFile';
import { groupIssues, getJiraIssues } from './Jira/getJiraIssues';
import { mockedIssues } from './issuesMock';

import { IUserInput } from './Jira/jiraConfig';
import { getUserInputFromCLI } from './CLI/cli';
import { isProduction } from './Common/utils';

const generateChangelog = async (userInput: IUserInput) => {
  const jiraIssues =
    process.env.USE_MOCKED_ISSUES === 'Y'
      ? mockedIssues
      : await getJiraIssues(userInput);

  validateIssues(jiraIssues);

  const issueGroups = groupIssues(jiraIssues);

  const staticMarkup = renderIssuesToStaticMarkup(issueGroups);

  saveStaticMarkupToFile(userInput.version, staticMarkup);
};

const generateChangelogFromCLIInput = async () => {
  const userInput = await getUserInputFromCLI();

  generateChangelog(userInput);
};

if (isProduction()) {
  generateChangelogFromCLIInput();
} else {
  generateChangelog({ version: '2020.1.1' });
}
