import React, { Component, PropTypes } from 'react';
import '../styles/components/CartBlock.scss';
// assets
import ic_cart from '../images/icons/ic_shopping_cart.svg';

class CartBlock extends Component {

    _renderQuantity(quantity) {
        if (quantity === 1) {
            return `${quantity} ítem`;
        } else {
            return `${quantity} ítems`;
        }
    }

    render() {
        return (
            <div className="CartBlock">
                <img src={ic_cart} className="shoppingCartIcon" alt="Shopping Cart" />
                <span>{this._renderQuantity(this.props.itemsQuantity)} ${this.props.cartAmount}</span>
            </div>
        );
    }
}

CartBlock.propTypes = {
    itemsQuantity: PropTypes.number,
    cartAmount: PropTypes.number
};

export default CartBlock;