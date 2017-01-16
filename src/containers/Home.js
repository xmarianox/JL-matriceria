import React, { Component } from 'react'
// container styles
import '../styles/containers/Home.scss';
// components
import MainImageSlider from '../components/MainImageSlider';
import CatalogBlock    from '../components/CatalogBlock';
import Merchandising   from '../components/Merchandising';
import MercadoPago     from '../components/MercadoPago';
// assets
import images from '../images/img-slider.jpg';

class App extends Component {

  constructor() {
    super();

    this.state = {
      mainImages: [
        {
            original: images,
            originalAlt: 'Promo 1',
            description: {
              new_product: true,
              title: 'Jl Matrceria web-22',
              label: 'Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare.',
            }
        },
        {
            original: images,
            originalAlt: 'Promo 2',
            description: {
              new_product: true,
              title: 'Jl Matrceria web-23',
              label: 'Orbi accumsan ipsum velit.'
            }
        },
        {
            original: images,
            originalAlt: 'Promo 3',
            description: {
              new_product: true,
              title: 'Jl Matrceria web-24',
              label: 'Orbi accumsan ipsum velit.',
            }
        }
      ]
    };
  }

  render() {
    return (
      <section className="home-container">
          
        <MainImageSlider productImages={this.state.mainImages} />

        <CatalogBlock />

        <Merchandising />

        <MercadoPago />

      </section>
    )
  }
}

export default App;