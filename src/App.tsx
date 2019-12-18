import React from "react";
import Issue from "./Issue";

interface IProps {
  data: any;
}

const App: React.FC<IProps> = props => {
  return (
    <div className={"container"}>
      {props.data.issues.map((issue: any) => (
        <Issue key={issue.id} issue={{ ...issue }}></Issue>
      ))}
    </div>
  );
};

export default App;
