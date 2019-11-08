import React from 'react';

class App extends React.Component {
  render() {
    return <div>Hejsanok {this.props.data.ok}</div>;
  }
}

export default App;
