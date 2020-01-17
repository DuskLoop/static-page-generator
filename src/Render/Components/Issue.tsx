import React from 'react';
import { IJiraIssue } from '../../Common/jiraIssue';

interface IProps {
  issue: IJiraIssue;
}

const Issue: React.FC<IProps> = props => {
  return (
    <div style={{ margin: '24px 0px' }}>
      <h4 style={{ margin: '8px 0' }}>
        {props.issue.key}: {props.issue.fields.customfield_10034}
      </h4>
      <p
        dangerouslySetInnerHTML={{
          __html: props.issue.renderedFields.customfield_10035,
        }}
        style={{ margin: '8px 0' }}
      />
    </div>
  );
};

export default Issue;
