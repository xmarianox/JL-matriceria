import React, {Component} from 'react';

class ProductDetail extends Component {

    render() {
        return (
            <section className="product-detail-container">

                <article>
                    <div>
                        <img src="http://placehold.it/195x250/E8117F/000000" alt="image" />
                    </div>{/* row */}

                    <div>
                        <div>
                            <span>NEW!</span>

                            <h2>Jl Matrceria web-22</h2>

                            <span className="product-price">$150</span>

                            <p>Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare.</p>
                        </div>

                        <div>
                            <em>color</em>

                            <ul>
                                <li>rojo</li>
                                <li>rojo</li>
                                <li>rojo</li>
                                <li>rojo</li>
                            </ul>
                        </div>

                        <div>
                            <em>tamaño</em>

                            <ul>
                                <li>S</li>
                                <li>M</li>
                                <li>L</li>
                            </ul>
                        </div>

                        <div>
                            <em>cantidad</em>
                        </div>

                    </div>{/* row */}
                    
                </article>

            </section>
        );
    }
}

export default ProductDetail;