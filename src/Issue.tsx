import React from "react";

interface IProps {
  issue: any;
}

const Issue: React.FC<IProps> = props => {
  return (
    <div>
      <h2>
        {props.issue.key} : {props.issue.fields.summary}
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
