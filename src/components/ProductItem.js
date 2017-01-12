import React, {Component} from 'react';

class ProductItem extends Component {
    render() {
        return (
            <li>
                <figure>
                    <img src={this.props.image} alt={this.props.name} />
                    <figcaption>
                        <span>{this.props.name}</span>
                        <span>{this.props.price}</span>
                    </figcaption>
                </figure>
            </li>
        );
    }
}

export default ProductItem;