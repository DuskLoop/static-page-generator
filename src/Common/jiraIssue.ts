import { IRenderedFields, IFields } from './jiraField';

export interface IJiraIssue {
  expand: string;
  id: string;
  self: string;
  key: string;
  renderedFields: IRenderedFields;
  fields: IFields;
}

export interface IIssueGroup {
  title: string;
  issues: IJiraIssue[];
}
