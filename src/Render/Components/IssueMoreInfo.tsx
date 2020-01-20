import React from 'react';
import { IJiraIssue } from '../../Common/jiraIssue';
import { TopBar } from './Topbar';

interface IProps {
  issue: IJiraIssue;
}

export const IssueMoreInfo: React.FC<IProps> = props => {
  return (
    <>
      <TopBar src="../assets/AvenyLogo.svg" homeBtn />
      <div className={'container'}>
        <div
          dangerouslySetInnerHTML={{
            __html: props.issue.renderedFields.customfield_10038,
          }}
        ></div>
      </div>
    </>
  );
};
