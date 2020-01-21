import React from 'react';
import { IJiraIssue } from '../../Common/jiraIssue';
import { TopBar } from './Topbar';
import ArrowBack from './ArrowBack';

interface IProps {
  issue: IJiraIssue;
}

export const IssueMoreInfo: React.FC<IProps> = props => {
  return (
    <>
      <TopBar src="../assets/AvenyLogo.svg" homeBtn />
      <a
        href={`../index.html#${props.issue.key}`}
        className="issue-more-info-back-button"
      >
        <div className="issue-more-info-back-button-container">
          <ArrowBack />
          Tillbaka till ändringslogg
        </div>
      </a>
      <div className={'container'}>
        <h4 className="issue-title">{props.issue.fields.customfield_10034}</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: props.issue.renderedFields.customfield_10038,
          }}
        ></div>
      </div>
    </>
  );
};
