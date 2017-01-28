import React, {Component} from 'react';
// container styles
import '../styles/containers/Catalogo.scss';
// components
import CatalogPromoBanner from '../components/CatalogPromoBanner';
import CatalogCategoryBlock    from '../components/CatalogCategoryBlock';
// assets
import imagesOriginal from '../images/img-promo-vaso-original.jpg';
import images from '../images/img-promo-vaso.jpg';

class Catalogo extends Component {
    constructor() {
        super();

        this.state = {
            mainImages: {
                original: images,
                originalDesktop: imagesOriginal,
                originalAlt: 'img-promo-vaso',
                description: {
                    new_product: true,
                    title: 'img-promo-vaso',
                    label: 'Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare.',
                }
            }
        };
    }

    render() {
        // console.log(`Categoria: ${this.props.params.categoria}`);

        return (
            <section className="catalogo-container">
                <CatalogPromoBanner productImage={this.state.mainImages} />

                <CatalogCategoryBlock categoryTitle={this.props.params.categoria} />

            </section>
        );
    }

}

export default Catalogo;