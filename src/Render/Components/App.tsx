import React from 'react';
import Issue from './Issue';
import { IJiraIssue, IIssueGroup } from '../../Common/jiraIssue';
import IssueGroup from './IssueGroup';
import { TopBar } from './Topbar';
import { Header } from './Header';

interface IProps {
  issueGroups: IIssueGroup[];
  version: string;
  releaseDate: string;
}

const App: React.FC<IProps> = props => {
  return (
    <>
      <TopBar src="assets/AvenyLogo.svg" />
      <div className={'container'}>
        <Header version={props.version} releaseDate={props.releaseDate} />
        {props.issueGroups.map(issueGroup => (
          <IssueGroup
            key={issueGroup.title}
            title={issueGroup.title}
            issues={issueGroup.issues}
          />
        ))}
      </div>
    </>
  );
};

export default App;
