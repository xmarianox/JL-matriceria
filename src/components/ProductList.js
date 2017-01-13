import React, {Component} from 'react';

import '../styles/components/ProductList.scss';
import ProductItem from './ProductItem';

class ProductList extends Component {

    constructor() {
        super();

        this.state = {
            list: [
                {
                    id: 1,
                    name: 'Vaso',
                    image: 'http://placehold.it/350x150/E8117F/000000',
                    price: '35.00'
                },
                {
                    id: 2,
                    name: 'Vaso 2',
                    image: 'http://placehold.it/350x150/E8117F/000000',
                    price: '39.00'
                },
                {
                    id: 3,
                    name: 'Vaso 3',
                    image: 'http://placehold.it/350x150/E8117F/000000',
                    price: '32.00'
                },
                {
                    id: 4,
                    name: 'Vaso 4',
                    image: 'http://placehold.it/350x150/E8117F/000000',
                    price: '45.00'
                },
                {
                    id: 5,
                    name: 'Vaso 5',
                    image: 'http://placehold.it/350x150/E8117F/000000',
                    price: '55.00'
                },
                {
                    id: 6,
                    name: 'Vaso 6',
                    image: 'http://placehold.it/350x150/E8117F/000000',
                    price: '39.00'
                },
                {
                    id: 7,
                    name: 'Vaso 7',
                    image: 'http://placehold.it/350x150/E8117F/000000',
                    price: '34.00'
                }
            ]
        };
    }

    render() {
        return (
            <ul className="ProductList">
                {
                    this.state.list.map((item) => {
                        return <ProductItem product={item} key={item.id} />
                    })
                }
            </ul>
        );
    }
}

export default ProductList;