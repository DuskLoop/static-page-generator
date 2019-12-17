import React from 'react';
import Issue from './Issue';

class App extends React.Component {
  render() {
    return (
      <div className={'container'}>
        {this.props.data.issues.map(issue => (
          <Issue key={issue.id} issue={{ ...issue }}></Issue>
        ))}
      </div>
    );
  }
}

export default App;
