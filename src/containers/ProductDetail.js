import React, {Component} from 'react';
// styles
import '../styles/containers/ProductDetail.scss';
// components
import ProductDetailBlock from '../components/ProductDetailBlock';
import ProductRelatedBlock from '../components/ProductRelatedBlock';

class ProductDetail extends Component {

    constructor() {
        super();

        this.state = {
            producto: {
                image: 'http://placehold.it/414x350/E8117F/000000',
                name: 'Jl Matrceria web-22',
                price: '150',
                description: 'Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare.',
                new_label: true,
                available_color: [
                    {id: 1, label: 'Rojo', code: '#fa4941'},
                    {id: 2, label: 'Verde', code: '#00f892'},
                    {id: 3, label: 'Azul', code: '#1c2f63'},
                    {id: 4, label: 'Amarillo', code: '#ffa200'}
                ],
                available_size: [
                    {id: 1, label: 'Lorem Ipsum dolor sit.', code: 'S'},
                    {id: 2, label: 'Lorem Ipsum sit.', code: 'M'},
                    {id: 3, label: 'Lorem dolor sit.', code: 'L'}
                ]
            },
            related_list: [
                {
                    id: 1,
                    name: 'Vaso',
                    image: 'http://placehold.it/195x250/E8117F/000000',
                    price: '35.00'
                },
                {
                    id: 2,
                    name: 'Vaso 2',
                    image: 'http://placehold.it/195x250/E8117F/000000',
                    price: '39.00'
                },
                {
                    id: 3,
                    name: 'Vaso 3',
                    image: 'http://placehold.it/195x250/E8117F/000000',
                    price: '32.00'
                },
                {
                    id: 4,
                    name: 'Vaso 4',
                    image: 'http://placehold.it/195x250/E8117F/000000',
                    price: '45.00'
                },
                {
                    id: 5,
                    name: 'Vaso 5',
                    image: 'http://placehold.it/195x250/E8117F/000000',
                    price: '45.00'
                }

            ]
        }
    }


    render() {
        return (
            <section className="product-detail-container">

                <ProductDetailBlock producto={this.state.producto} />

                <ProductRelatedBlock productList={this.state.related_list} />

            </section>
        );
    }
}

export default ProductDetail;