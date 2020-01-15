"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldIds = void 0;
const customFieldIds = {
  showInChangeLog: '10036',
  changeLogSummary: '10034',
  changeLogDescription: '10035'
};
const fieldIds = {
  summary: 'summary',
  description: 'description',
  components: 'components',
  showInChangeLog: `customfield_${customFieldIds.showInChangeLog}`,
  changeLogSummary: `customfield_${customFieldIds.changeLogSummary}`,
  changeLogDescription: `customfield_${customFieldIds.changeLogDescription}`
};
exports.fieldIds = fieldIds;