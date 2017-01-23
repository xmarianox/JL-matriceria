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
               
                <article style={{ display: 'none' }}>
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

                <article style={{ display: 'none' }}>
                    <header>
                        <h2>FINALIZAR MI COMPRA</h2>
                    </header>

                    <div className="step step-1">
                        <div className="step-container">
                            <h3>1. Datos de facturación</h3>
                            <p>Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. um velit. Nam nec.</p>
                        </div>

                        <form className="form-checkout">
                            <div className="form-control">
                                <label htmlFor="checkout-emaill">Correo</label>
                                <input type="email" name="checkout-email" id="checkout-email" />
                            </div>

                            <div className="form-control">
                                <label htmlFor="checkout-name">Nombre</label>
                                <input type="text" name="checkout-name" id="checkout-name" />
                            </div>

                            <div className="form-control">
                                <label htmlFor="checkout-lastname">Apellido</label>
                                <input type="text" name="checkout-lastname" id="checkout-lastname" />
                            </div>

                            <div className="form-control">
                                <label htmlFor="checkout-dni">DNI</label>
                                <input type="text" name="checkout-dni" id="checkout-dni" />
                            </div>

                            <div className="form-control">
                                <button className="btn btn_action">continuar</button>
                            </div>
                        </form>
                    </div>
                </article>

                <article style={{ display: 'none' }}>
                    <header>
                        <h2>FINALIZAR MI COMPRA</h2>
                    </header>

                    <div className="step step-2">
                        <div className="step-container">
                            <h3>2. Datos de envío</h3>
                            <p>Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. um velit. Nam nec.</p>
                        </div>

                        <form className="form-checkout">
                            <div className="form-control">
                                <label htmlFor="shipping-emaill">Correo</label>
                                <input type="email" name="shipping-email" id="shipping-email" />
                            </div>

                            <div className="form-control">
                                <label htmlFor="shipping-name">Nombre</label>
                                <input type="text" name="shipping-name" id="shipping-name" />
                            </div>

                            <div className="form-control">
                                <label htmlFor="shipping-lastname">Apellido</label>
                                <input type="text" name="shipping-lastname" id="shipping-lastname" />
                            </div>

                            <div className="form-control">
                                <label htmlFor="shipping-dni">DNI</label>
                                <input type="text" name="shipping-dni" id="shipping-dni" />
                            </div>

                            <div className="form-control">
                                <label htmlFor="shipping-city">Ciudad</label>
                                <input type="text" name="shipping-city" id="shipping-city" />
                            </div>

                            <div className="form-control">
                                <label htmlFor="checkout-cp">Código Postal</label>
                                <input type="text" name="checkout-cp" id="checkout-cp" />
                            </div>

                            <div className="form-control">
                                <label htmlFor="checkout-province">Provincia de destino de envío</label>
                                <input type="text" name="checkout-province" id="checkout-province" />
                            </div>

                            <div className="form-control">
                                <label htmlFor="checkout-country">País</label>
                                <input type="text" name="checkout-country" id="checkout-country" />
                            </div>

                            <div className="form-control">
                                <button className="btn btn_action">continuar</button>
                            </div>
                        </form>
                    </div>
                </article>


                <article>
                    <header>
                        <h2>FINALIZAR MI COMPRA</h2>
                    </header>

                    <div className="step step-3">
                        <div className="step-container">
                            <h3>3. Confirmar</h3>
                        </div>

                        <ProductsInCartList data={this.state.items} />

                        <div className="resume-box">
                            <h4>DATOS DE ENVIO</h4>
                            
                            <p>ENVIO A DOMICILIO</p>

                            <ul className="shipping-data">
                                <li>Nombre y Apellido: xxxxxxx xxxxxx</li>
                                <li>DNI: xxxxxxxx</li>
                                <li>Teléfono: xxxxxxxxxx</li>
                                <li>Dirección: xxxxxxxx</li>
                                <li>Ciudad: xxxxxxxxxx</li>
                                <li>Código Postal: xxxx</li>
                                <li>Provincia de envío: xxxxxxxxxx </li>
                            </ul>
        
                            <button className="btn btn_action">PAGAR CON MERCADOPAGO</button>
                        
                        </div>

                    </div>
                </article>

            </section>
        );
    }
}

export default Checkout;