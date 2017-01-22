import React, {Component}  from 'react';
import '../styles/containers/Checkout.scss';

import ProductsInCartList from '../components/ProductsInCartList';

class Checkout extends Component {

    constructor() {
        super();

        this.state = {

            subtotal: 0,

            items: [
                {
                    id: 1,
                    image: 'http://placehold.it/195x250/E8117F/000000',
                    name: 'Jl Matrceria web-37',
                    description: 'Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. um velit. Nam nec.',
                    price: 157,
                    quantity: 1
                },
                {
                    id: 2,
                    image: 'http://placehold.it/195x250/E8117F/000000',
                    name: 'Jl Matrceria web-37',
                    description: 'Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. um velit. Nam nec.',
                    price: 200,
                    quantity: 1
                },
                {
                    id: 3,
                    image: 'http://placehold.it/195x250/E8117F/000000',
                    name: 'Jl Matrceria web-37',
                    description: 'Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. um velit. Nam nec.',
                    price: 145,
                    quantity: 3
                }
            ]
        };
    }

    _calculateSubtotal(list) {
        let a = [];

        list.map((item) => {
            return a.push((item.price * item.quantity));
        });

        return a.reduce((a, b) => a + b, 0);
    }

    render() {
        return (
            <section className="checkout-container">
               
                <article>
                    <header>
                        <h2>MI COMPRA</h2>
                    </header>

                    <ProductsInCartList data={this.state.items} />

                    <div className="subtotal-box">
                        <div className="subtotal-box-row">
                            <strong>SubTotal</strong>  <span>${this._calculateSubtotal(this.state.items)}</span>
                        </div>
                        <div className="subtotal-box-row total-item">
                            <strong>TOTAL</strong>  <span>${this._calculateSubtotal(this.state.items)}</span>
                        </div>
                    </div>

                    <button className="btn btn_action">COMPRAR</button>
                    
                </article>

            </section>
        );
    }
}

export default Checkout;