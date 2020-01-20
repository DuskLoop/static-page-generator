import React from 'react';
import { IJiraIssue } from '../../Common/jiraIssue';
import Issue from './Issue';

interface IProps {
  title: string;
  issues: IJiraIssue[];
}

const IssueGroup: React.FunctionComponent<IProps> = props => {
  return (
    <div>
      <h2 className="issue-group-title">{props.title}</h2>
      <div className="issue-group-issues-container">
        {props.issues.map(issue => (
          <Issue key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default IssueGroup;
