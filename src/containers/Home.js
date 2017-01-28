import React, { Component } from 'react'
// container styles
import '../styles/containers/Home.scss';
// components
import MainImageSlider from '../components/MainImageSlider';
import CatalogBlock    from '../components/CatalogBlock';
import Merchandising   from '../components/Merchandising';
import MercadoPago     from '../components/MercadoPago';
// assets
import imageDesktop from '../images/img-slider-original.jpg';
import imagesMobile from '../images/img-slider.jpg';

class App extends Component {

  constructor() {
    super();

    this.state = {
      mainImages: [
        {
            original: imagesMobile,
            srcSet: imageDesktop,
            originalAlt: 'Promo 1',
            description: {
              new_product: true,
              title: 'Jl Matrceria web-22',
              label: 'Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare.',
            }
        },
        {
            original: imagesMobile,
            srcSet: imageDesktop,
            originalAlt: 'Promo 2',
            description: {
              new_product: true,
              title: 'Jl Matrceria web-23',
              label: 'Orbi accumsan ipsum velit.'
            }
        },
        {
            original: imagesMobile,
            srcSet: imageDesktop,
            originalAlt: 'Promo 3',
            description: {
              new_product: true,
              title: 'Jl Matrceria web-24',
              label: 'Orbi accumsan ipsum velit.',
            }
        }
      ],
      catalog: [
          {
              id: 1,
              label: 'VASOS'
          },
          {
              id: 2,
              label: 'SERVILLETEROS'
          },
          {
              id: 3,
              label: 'TUPPERS'
          }
      ],
      list: [
          {
              id: 1,
              name: 'Vaso',
              image: 'http://placehold.it/195x250/E8117F/000000',
              price: '35.00'
          },
          {
              id: 2,
              name: 'Vaso 2',
              image: 'http://placehold.it/195x250/E8117F/000000',
              price: '39.00'
          },
          {
              id: 3,
              name: 'Vaso 3',
              image: 'http://placehold.it/195x250/E8117F/000000',
              price: '32.00'
          },
          {
              id: 4,
              name: 'Vaso 4',
              image: 'http://placehold.it/195x250/E8117F/000000',
              price: '45.00'
          },
          {
              id: 5,
              name: 'Vaso 5',
              image: 'http://placehold.it/195x250/E8117F/000000',
              price: '45.00'
          }
      ]
    };
  }

  render() {
    return (
      <section className="home-container">
          
        <MainImageSlider productImages={this.state.mainImages} />

        <CatalogBlock catalogData={this.state} />

        <Merchandising />

        <MercadoPago />

      </section>
    )
  }
}

export default App;