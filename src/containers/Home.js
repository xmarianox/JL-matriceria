import React, { Component } from 'react'
import '../styles/containers/Home.scss';

import MainImageSlider from '../components/MainImageSlider';


class App extends Component {
  render() {
    return (
      <section className="home-container">
          
        <MainImageSlider />

      </section>
    )
  }
}

export default App;