import React, { Component } from 'react'
// main theme assets
import '../styles/main.scss';

import Appbar       from '../components/Appbar';
import ContactBlock from '../components/ContactBlock';
import Footer       from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />

        {/* Page */}
        {this.props.children}

        <ContactBlock />

        <Footer />
      </div>
    )
  }
}

export default App;
