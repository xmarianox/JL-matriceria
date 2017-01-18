import React, {Component} from 'react';
import {Link} from 'react-router';

class ProductItem extends Component {
    render() {
        return (
            <li className="ProductItem">
                <Link to={`/productos/${this.props.product.id}`}>
                    <figure>
                        <img src={this.props.product.image} alt={this.props.product.name} />
                        <figcaption>
                            <span className="itemName">{this.props.product.name}</span>
                            <span className="itemPrice">${this.props.product.price}</span>
                        </figcaption>
                    </figure>
                </Link>
            </li>
        );
    }
}

export default ProductItem;