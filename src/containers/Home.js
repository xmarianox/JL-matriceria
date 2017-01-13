import React, { Component } from 'react'
import '../styles/containers/Home.scss';

import MainImageSlider from '../components/MainImageSlider';
import CatalogBlock    from '../components/CatalogBlock';
import Merchandising   from '../components/Merchandising';
import MercadoPago     from '../components/MercadoPago';
import ContactBlock    from '../components/ContactBlock';

class App extends Component {
  render() {
    return (
      <section className="home-container">
          
        <MainImageSlider />

        <CatalogBlock />

        <Merchandising />

        <MercadoPago />

        <ContactBlock />

      </section>
    )
  }
}

export default App;