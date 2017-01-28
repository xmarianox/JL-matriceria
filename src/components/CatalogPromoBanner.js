import React, {Component} from 'react';
import {Link} from 'react-router';
import '../styles/components/CatalogPromoBanner.scss';


class CatalogPromoBanner extends Component {

    _renderNewLabel(conditional) {
        if (conditional) {
            return <span className="new-product-tag">New!</span>;
        }
    }

    _renderItem(item) {
        return (
            <figure className='image-gallery-image'>
                <picture>
                    <source srcSet={item.originalDesktop} media="(min-width: 40em)" />
                    <img src={item.original} alt={item.originalAlt} />
                </picture>

                { item.description &&
                   <figcaption>
                        {this._renderNewLabel(item.description.new_product)}
                        <h3>{item.description.title}</h3>
                        <p>{item.description.label}</p>

                        <Link to="/" className="btn btn_action">VER Más</Link>
                   </figcaption>
                }
            </figure>
        );
    }

    render() {
        return (
            <article className="CatalogPromoBanner">
                {this._renderItem(this.props.productImage)}
            </article>
        );
    }
}

export default CatalogPromoBanner;