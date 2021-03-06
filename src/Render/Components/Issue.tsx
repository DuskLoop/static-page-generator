import React from 'react';
import { IJiraIssue } from '../../Common/jiraIssue';
import { fieldIds } from '../../Common/jiraField';
import { getPlatformColorClassName, platformIds } from '../../Jira/jiraConfig';

interface IProps {
  issue: IJiraIssue;
}

const Issue: React.FC<IProps> = props => {
  return (
    <div className="issue-container" id={props.issue.key}>
      <div className="issue-title-row">
        <div>
          <h4 className="issue-title">
            {props.issue.fields.customfield_10034}
          </h4>
          {props.issue.renderedFields.customfield_10038 && (
            <>
              &nbsp;
              <a
                className="issue-more-info-link"
                href={`pages/${props.issue.key}.html`}
              >
                mer info
              </a>
            </>
          )}
        </div>
        <h6 className="issue-key">{props.issue.key}</h6>
      </div>
      {props.issue.fields.customfield_10039 &&
        props.issue.fields.customfield_10039.id !== platformIds.windows && (
          <div
            className={`chip ${getPlatformColorClassName(
              props.issue.fields.customfield_10039
            )}`}
          >
            {props.issue.fields.customfield_10039.value}
          </div>
        )}
      <p
        dangerouslySetInnerHTML={{
          __html: props.issue.renderedFields.customfield_10035,
        }}
        className="issue-description"
      />
    </div>
  );
};

export default Issue;
