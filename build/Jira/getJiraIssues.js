"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJiraIssues = void 0;

var _jiraConfig = require("./jiraConfig");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getJiraUrl = (userInput, startAt) => {
  const jiraConfig = (0, _jiraConfig.getJiraConfig)(userInput);
  return `${_jiraConfig.jiraApiBaseUrl}/search?jql=${jiraConfig.jql}&fields=${jiraConfig.fields}&startAt=${startAt}&expand=renderedFields`;
};

const fetchAndParse = url => (0, _nodeFetch.default)(url, {
  headers: {
    Authorization: `Basic ${_jiraConfig.jiraApiKey}`,
    'Content-Type': 'application/json'
  }
}).then(res => res.text()).then(body => JSON.parse(body));

const getJiraIssuesPage = async (userInput, issues, startAt, resolve, reject) => {
  const jiraUrl = getJiraUrl(userInput, startAt);
  const res = await fetchAndParse(jiraUrl);
  const retrievedIssues = [...issues, ...res.issues];
  console.log(res.startAt, res.maxResults, res.total);

  if (res.total > res.maxResults + res.startAt) {
    const startAt = res.startAt + res.maxResults;
    getJiraIssuesPage(userInput, retrievedIssues, startAt, resolve, reject);
  } else {
    resolve(retrievedIssues);
  }
};

const getJiraIssues = async userInput => {
  const issues = await new Promise((resolve, reject) => {
    getJiraIssuesPage(userInput, [], 0, resolve, reject);
  }).catch(err => {
    console.error(err);
  });

  if (issues == null) {
    return [];
  } else {
    return issues;
  }
};

exports.getJiraIssues = getJiraIssues;