import React, { Component } from 'react'
// main theme assets
import '../styles/main.scss';

import Appbar       from '../components/Appbar';
import Nav          from '../components/Nav';
import ContactBlock from '../components/ContactBlock';
import Footer       from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />

        <div className="container">
          <div className="row">
            <div className="col-2">
              <Nav />
            </div>{/* 30 */}
            <div className="col-10">
              {this.props.children}

              <ContactBlock />
            </div>{/* 70 */}
           </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default App;
