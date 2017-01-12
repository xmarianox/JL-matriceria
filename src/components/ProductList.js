import React, {Component} from 'react';

import ProductItem from './ProductItem';

class ProductList extends Component {

    render() {
        return (
            <ul>
                <ProductItem name="" image="" price="" />
            </ul>
        );
    }
}

export default ProductList;