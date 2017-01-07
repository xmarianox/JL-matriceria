import React, { Component } from 'react';
import '../styles/components/CartBlock.scss';
// assets
import ic_cart from '../images/icons/ic_shopping_cart.svg';

class CartBlock extends Component {
    render() {
        return (
            <div className="CartBlock">
                <img src={ic_cart} className="shoppingCartIcon" alt="Shopping Cart" />
                <span>0 ítems $0.00</span>
            </div>
        );
    }
}

export default CartBlock;