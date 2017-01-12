import React, { Component } from 'react'
import '../styles/containers/Home.scss';

import MainImageSlider from '../components/MainImageSlider';
import ProductList     from '../components/ProductList';
import Merchandising   from '../components/Merchandising';
import MercadoPago     from '../components/MercadoPago';
import ContactBlock    from '../components/ContactBlock';

class App extends Component {
  render() {
    return (
      <section className="home-container">
          
        <MainImageSlider />

        <ProductList />

        <Merchandising />

        <MercadoPago />

        <ContactBlock />

      </section>
    )
  }
}

export default App;