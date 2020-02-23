import React from 'react';
import './App.css';
import IdSearch from './components/IdSearch/index.js';
import NameSearch from './components/NameSearch/index.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <IdSearch />
        <NameSearch />
      <h2>Reporting</h2>
        <div id="reportingArea"></div>
      </div>
    )
  }
}

export default App;