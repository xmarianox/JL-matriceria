import React, {Component} from 'react';
// assets
import '../styles/components/MercadoPago.scss';
import imgMercadoPago from '../images/ic_mercado_pago.png';

class MercadoPago extends Component {
    render() {
        return (
            <article className="MercadoPago">
                <h3>trabajamos con</h3>
                <img src={imgMercadoPago} alt="Mercado Pago" />
            </article>
        );
    }
}

export default MercadoPago;