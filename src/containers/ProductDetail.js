import React, {Component} from 'react';
// styles
import '../styles/containers/ProductDetail.scss';

// components
import ProductDetailBlock from '../components/ProductDetailBlock';

class ProductDetail extends Component {

    render() {
        return (
            <section className="product-detail-container">

                <ProductDetailBlock />

            </section>
        );
    }
}

export default ProductDetail;