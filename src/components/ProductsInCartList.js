import React, {Component} from 'react';
import '../styles/components/ProductsInCartList.scss';

class ProductsInCartList extends Component {

    render() {
        const data = this.props.data;

        return (
            <ul className="ProductsInCartList">
                {
                    data.map((item) => {
                        return (
                            <li className="CartListItem" key={item.id}>
                                <div className="description-container">
                                    <img src={item.image} alt={item.name} />

                                    <div className="product-info">
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>

                                <ul>
                                    <li>
                                        <strong>Precio</strong>
                                        <span>${item.price}</span>
                                    </li>

                                    <li>
                                        <strong>Cantidad</strong>
                                        <span>{item.quantity}</span>
                                    </li>

                                    <li>
                                        <strong>SubTotal</strong>
                                        <span>${item.price * item.quantity}</span>
                                    </li>
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

}

export default ProductsInCartList;