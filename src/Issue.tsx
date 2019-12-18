import React from 'react';

interface IProps {
  issue: any;
  hej: string;
}

const Issue: React.FC<IProps> = props => {
  return (
    <div>
      <h2>
        {props.issue.key} : {props.issue.fields.summary}
        {props.hej}
      </h2>
      <div
        dangerouslySetInnerHTML={{
          __html: props.issue.renderedFields.description,
        }}
      ></div>
    </div>
  );
};

export default Issue;
