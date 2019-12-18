"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./App"));

var _fs = _interopRequireDefault(require("fs"));

var _template = _interopRequireDefault(require("./template"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _paths = _interopRequireDefault(require("../config/paths"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _nodeFetch.default)('http://eniacdata.atlassian.net/rest/api/3/search?jql=issuekey = "EK-808" &fields=summary, description, customfield_10036, customfield_10035, customfield_10034, customfield_10010&maxResults=170&startAt=0&expand=renderedFields', {
  headers: {
    Authorization: 'Basic ZGFuaWVsLmhpbGRlc3NvbkBlbmlhYy5zZTo4ZmJBYTNrNXJjZkFhU0tYSFNRU0YxREI=',
    'Content-Type': 'application/json'
  }
}).then(res => res.text()).then(body => {
  const response = JSON.parse(body);
  const staticMarkup = (0, _server.renderToStaticMarkup)(_react.default.createElement(_App.default, {
    data: response
  })); // console.log(staticMarkup);
  // const hej: string = 2;

  const markup = (0, _template.default)({
    body: staticMarkup,
    title: 'Issue Test'
  }); // console.log(markup);

  _fs.default.writeFile(`${_paths.default.appDevOutput}/index.html`, markup, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Done without any errors');
    }
  });
});