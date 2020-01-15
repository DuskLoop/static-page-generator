"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jiraApiKey = exports.jiraApiBaseUrl = exports.getJiraConfig = void 0;

var _jiraField = require("../Common/jiraField");

const getJQL = userInput => `project in (EK, KF, GR) AND issuetype in (Hotfix, Story) AND fixVersion = ${userInput.version} AND statusCategory = 3 AND "To Changelog" = Ja`;

const getJiraConfig = userInput => {
  const jql = getJQL(userInput);
  return {
    jql,
    fields: [_jiraField.fieldIds.summary, _jiraField.fieldIds.description, _jiraField.fieldIds.showInChangeLog, _jiraField.fieldIds.changeLogSummary, _jiraField.fieldIds.changeLogDescription, _jiraField.fieldIds.components]
  };
};

exports.getJiraConfig = getJiraConfig;
const jiraApiBaseUrl = 'http://eniacdata.atlassian.net/rest/api/3/';
exports.jiraApiBaseUrl = jiraApiBaseUrl;
const jiraApiKey = 'ZGFuaWVsLmhpbGRlc3NvbkBlbmlhYy5zZTo4ZmJBYTNrNXJjZkFhU0tYSFNRU0YxREI=';
exports.jiraApiKey = jiraApiKey;