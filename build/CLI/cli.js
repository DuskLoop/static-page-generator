"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInputFromCLI = void 0;

var _inquirer = _interopRequireDefault(require("inquirer"));

var _getVersions = require("../Jira/getVersions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getUserInputFromCLI = () => {
  return (0, _getVersions.getVersions)().then(versions => {
    return _inquirer.default.prompt([{
      type: 'list',
      name: 'version',
      message: 'Vilken version vill du bygga changelog för?',
      choices: [...versions.sort(_getVersions.versionCompareFunction).map(version => version.name)]
    }]);
  });
};

exports.getUserInputFromCLI = getUserInputFromCLI;