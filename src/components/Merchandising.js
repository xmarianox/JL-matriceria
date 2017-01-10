import React, { Component } from 'react';
// assets
import '../styles/components/Merchandising.scss';
import imgMerchandising from '../images/img-merchandising.jpg';

class Merchandising extends Component {

    render() {
        return (
            <article className="MerchandisingComponent">
                <div className="merchandising-item">
                    <img src={imgMerchandising} alt="Merchandising" />
                </div>
                <div className="merchandising-item">
                    <h2>merchandising</h2>

                    <p>Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare.  tellus a odio tincidunt auctor a  velit. Nam nec tellus a odio tincidunt auctor a ornare.  tellus a odio tincid
 velit. Nam nec tellus a odio tincidunt auctor a ornare.  tellus a odio tincidunt auctor a</p>

                    <button className="btn btn_action">hacé tu pedido</button>
                </div>
            </article>
        );
    }

}

export default Merchandising;