"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVersions = exports.versionCompareFunction = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _jiraConfig = require("./jiraConfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const versionCompareFunction = (versionA, versionB) => {
  return new Date(versionB.releaseDate).getTime() - new Date(versionA.releaseDate).getTime();
};

exports.versionCompareFunction = versionCompareFunction;

const getVersions = async () => {
  return (0, _nodeFetch.default)(`${_jiraConfig.jiraApiBaseUrl}/project/GR/versions`, {
    headers: {
      Authorization: `Basic ${_jiraConfig.jiraApiKey}`,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
};

exports.getVersions = getVersions;