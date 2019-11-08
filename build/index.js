"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _server.renderToString)(_react.default.createElement(_App.default, {
  data: {
    ok: 'lol'
  }
})));