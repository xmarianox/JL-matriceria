import React, { Component } from 'react'
import '../styles/containers/Home.scss';

import MainImageSlider from '../components/MainImageSlider';
import Merchandising from '../components/Merchandising';
import MercadoPago from '../components/MercadoPago';

class App extends Component {
  render() {
    return (
      <section className="home-container">
          
        <MainImageSlider />

        <Merchandising />

        <MercadoPago />

      </section>
    )
  }
}

export default App;