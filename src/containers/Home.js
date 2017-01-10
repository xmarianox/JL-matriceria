import React, { Component } from 'react'
import '../styles/containers/Home.scss';

import MainImageSlider from '../components/MainImageSlider';
import Merchandising from '../components/Merchandising';
import MercadoPago from '../components/MercadoPago';
import ContactBlock from '../components/ContactBlock';

class App extends Component {
  render() {
    return (
      <section className="home-container">
          
        <MainImageSlider />

        <Merchandising />

        <MercadoPago />

        <ContactBlock />

      </section>
    )
  }
}

export default App;