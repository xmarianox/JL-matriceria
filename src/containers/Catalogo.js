import React, {Component} from 'react';
// container styles
import '../styles/containers/Catalogo.scss';
// components
import MainImageSlider from '../components/MainImageSlider';
import CatalogBlock    from '../components/CatalogBlock';
import ContactBlock    from '../components/ContactBlock';
// assets
import images from '../images/img-slider.jpg';

class Catalogo extends Component {
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
            <section className="catalogo-container">
                <MainImageSlider productImages={this.state.mainImages} />

                <CatalogBlock />

                <ContactBlock />
            </section>
        );
    }

}

export default Catalogo;