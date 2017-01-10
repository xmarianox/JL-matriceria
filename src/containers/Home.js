import React, { Component } from 'react'
import '../styles/containers/Home.scss';

import MainImageSlider from '../components/MainImageSlider';
import Merchandising from '../components/Merchandising';

class App extends Component {
  render() {
    return (
      <section className="home-container">
          
        <MainImageSlider />

        <Merchandising />

      </section>
    )
  }
}

export default App;