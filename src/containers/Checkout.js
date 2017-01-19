import React, {Component}  from 'react';
import '../styles/containers/Checkout.scss';

import CartBlock from '../components/CartBlock';

class Checkout extends Component {

    constructor() {
        super();

        this.state = {

        };
    }

    render() {
        return (
            <section className="checkout-container">
               

                <article>
                    <header>
                        <h2>MI COMPRA</h2>

                        <CartBlock itemsQuantity={1} cartAmount={45.56} />

                    </header>
                </article>

            </section>
        );
    }
}

export default Checkout;