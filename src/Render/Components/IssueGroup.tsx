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
      <h2>{props.title}</h2>
      <div style={{ marginLeft: '8px' }}>
        {props.issues.map(issue => (
          <Issue key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default IssueGroup;
