const getJiraIssues = require('../build/Jira/getJiraIssues').getJiraIssues;
const fs = require('fs');
const paths = require('../config/paths');

const userInput = { version: '2020.1.1' };

const generateChangelog = async () => {
  const jiraIssues = await getJiraIssues(userInput);

  fs.writeFileSync(
    paths.appSrc + '/issuesMock.ts',
    `export const mockedIssues = ${JSON.stringify(jiraIssues, null, 2)}`
  );
};

generateChangelog();
