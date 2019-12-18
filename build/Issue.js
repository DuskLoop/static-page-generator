"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Issue = props => {
  return _react.default.createElement("div", null, _react.default.createElement("h2", null, props.issue.key, " : ", props.issue.fields.summary, props.hej), _react.default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: props.issue.renderedFields.description
    }
  }));
};

var _default = Issue;
exports.default = _default;