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
                
                <CatalogSelector items={this.state.catalog} />

                <ProductList />
            </article>
        );
    }

}

export default CatalogBlock;