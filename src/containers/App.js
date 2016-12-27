import React, { Component } from 'react'
// import Helmet from "react-helmet";
// main theme assets
// import '../styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
        <Helmet 
          title=""
          titleTemplate="Grupo Upgrade | %s"
          defaultTitle="Grupo Upgrade" />  
        */}
        {/* Page */}
        {this.props.children}
      </div>
    )
  }
}

export default App;
