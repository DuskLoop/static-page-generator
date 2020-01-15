import React from 'react';
import Issue from './Issue';
import { IJiraIssue, IIssueGroup } from '../../Common/jiraIssue';
import IssueGroup from './IssueGroup';

interface IProps {
  issueGroups: IIssueGroup[];
}

const App: React.FC<IProps> = props => {
  return (
    <div className={'container'}>
      {props.issueGroups.map(issueGroup => (
        <IssueGroup
          key={issueGroup.title}
          title={issueGroup.title}
          issues={issueGroup.issues}
        />
      ))}
    </div>
  );
};

export default App;
