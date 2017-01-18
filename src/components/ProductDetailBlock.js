import React, {Component} from 'react';
import '../styles/components/ProductDetailBlock.scss';


class ProductDetailBlock extends Component {
    render() {
        return (
            <article className="ProductDetailBlock">
                <div className="row">
                    <img className="pd-image" src="http://placehold.it/414x350/E8117F/000000" alt="image" />
                </div>{/* row */}

                <div className="row">
                    <div className="pd-info-container">
                        <div className="pd-item-container">
                            <span className="pd-new-tag">NEW!</span>

                            <h2>Jl Matrceria web-22</h2>

                            <span className="pd-price">$150</span>

                            <p>Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare.</p>
                        </div>

                        <div className="pd-item-container">
                            <em>color</em>

                            <ul>
                                <li>rojo</li>
                                <li>rojo</li>
                                <li>rojo</li>
                                <li>rojo</li>
                            </ul>
                        </div>

                        <div className="pd-item-container">
                            <em>tamaño</em>

                            <ul>
                                <li>S</li>
                                <li>M</li>
                                <li>L</li>
                            </ul>
                        </div>

                        <div className="pd-item-container">
                            <em>cantidad</em>
                        </div>
                    </div>

                </div>{/* row */}
            </article>
        );
    }
}

export default ProductDetailBlock;