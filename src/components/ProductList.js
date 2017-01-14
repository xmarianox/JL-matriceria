import React, {Component} from 'react';

import '../styles/components/ProductList.scss';
import ProductItem from './ProductItem';

class ProductList extends Component {

    render() {
        return (
            <ul className="ProductList">
                { this.props.productList.map((item) => {
                        return <ProductItem product={item} key={item.id} />
                    })
                }
            </ul>
        );
    }
}

export default ProductList;