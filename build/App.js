"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Issue = _interopRequireDefault(require("./Issue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = props => {
  return _react.default.createElement("div", {
    className: 'container'
  }, props.data.issues.map(issue => _react.default.createElement(_Issue.default, {
    key: issue.id,
    issue: { ...issue
    },
    hej: "lol"
  })));
};

var _default = App;
exports.default = _default;