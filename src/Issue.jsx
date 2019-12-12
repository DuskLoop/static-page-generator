import React from 'react';

const Issue = props => {
  // console.log(props.issue.renderedFields.description);
  return (
    <div>
      <h2>
        {props.issue.key} - {props.issue.fields.summary}
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
