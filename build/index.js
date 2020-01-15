"use strict";

var _renderIssues = require("./Render/renderIssues");

var _validateIssues = require("./Jira/validateIssues");

var _saveMarkupToFile = require("./FileSystem/saveMarkupToFile");

var _getJiraIssues = require("./Jira/getJiraIssues");

var _cli = require("./CLI/cli");

var _utils = require("./Common/utils");

const generateChangelog = async userInput => {
  const jiraIssues = await (0, _getJiraIssues.getJiraIssues)(userInput);
  (0, _validateIssues.validateIssues)(jiraIssues);
  const staticMarkup = (0, _renderIssues.renderIssuesToStaticMarkup)(jiraIssues);
  (0, _saveMarkupToFile.saveStaticMarkupToFile)(userInput.version, staticMarkup);
};

const generateChangelogFromCLIInput = async () => {
  const userInput = await (0, _cli.getUserInputFromCLI)();
  generateChangelog(userInput);
};

if ((0, _utils.isProduction)()) {
  generateChangelogFromCLIInput();
} else {
  generateChangelog({
    version: '2020.1.1'
  });
}