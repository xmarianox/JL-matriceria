import React, {Component} from 'react';
import '../styles/components/ProductRelatedBlock.scss';
import ProductList from './ProductList';

class ProductRelatedBlock extends Component {
    render() {
        return (
            <article className="ProductRelatedBlock">
                <header>
                    <h3>PRODUCTOS RELACIONADOS</h3>
                </header>

                <ProductList productList={this.props.productList} />
            </article>
        );
    }
}

export default ProductRelatedBlock;