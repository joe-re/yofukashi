import React from 'react';
import TimelineContainer from './timeline_container';
import HeaderContainer from './header_container';

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <TimelineContainer />
      </div>
    );
  }
}

export default App;
