import React, {Component} from 'react';

import CatalogSelector from './CatalogSelector';
import ProductList from './ProductList';
import '../styles/components/CatalogBlock.scss';

class CatalogBlock extends Component {

    constructor() {
        super();

        this.state = {
            catalog: [
                {
                    id: 1,
                    label: 'VASOS'
                },
                {
                    id: 2,
                    label: 'SERVILLETEROS'
                },
                {
                    id: 3,
                    label: 'TUPPERS'
                }
            ],
            list: [
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
                }
            ]
        };
    }

    render() {
        return (
            <article className="CatalogBlock">
                <div className="CatalogBlock-header">
                    <h2>catálogo</h2>
                    <p>Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. tellus a odio tincidunt auctor a</p>
                </div>
                
                <CatalogSelector items={this.state.catalog}  />

                <ProductList productList={this.state.list} />
            </article>
        );
    }

}

export default CatalogBlock;