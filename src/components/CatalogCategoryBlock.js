import React, {Component} from 'react';
import ProductList from './ProductList';

class CatalogCategoryBlock extends Component {
    
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
                <div>
                    <h3>{this.props.categoryTitle}</h3>
                
                    
                </div>
                
                <ProductList productList={this.state.list} />
            </article>
        );
    }

}

export default CatalogCategoryBlock;