import React, {Component} from 'react';

class ProductItem extends Component {
    render() {
        return (
            <li className="ProductItem">
                <figure>
                    <img src={this.props.product.image} alt={this.props.product.name} />
                    <figcaption>
                        <span className="itemName">{this.props.product.name}</span>
                        <span className="itemPrice">${this.props.product.price}</span>
                    </figcaption>
                </figure>
            </li>
        );
    }
}

export default ProductItem;