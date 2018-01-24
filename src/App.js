import React, { Component } from 'react';
import Layout from './components/Layout'
import './index.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout title = "ChatApp"/>
      </div>
    );
  }
}

export default App;
