import React from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './FlashMessagesList';

class App extends React.Component {

  render() {
    return (
      <div className="headerWrapper">
        <NavigationBar/>
        <FlashMessagesList/>
      </div>
    );
  }
}

export default App;