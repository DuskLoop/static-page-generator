"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderIssuesToStaticMarkup = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./Components/App"));

var _template = _interopRequireDefault(require("./template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderIssuesToStaticMarkup = issues => {
  const bodyStaticMarkup = (0, _server.renderToStaticMarkup)(_react.default.createElement(_App.default, {
    jiraIssues: issues
  }));
  const appStaticMarkup = (0, _template.default)({
    body: bodyStaticMarkup,
    title: 'Ändringslogg'
  });
  return appStaticMarkup;
};

exports.renderIssuesToStaticMarkup = renderIssuesToStaticMarkup;