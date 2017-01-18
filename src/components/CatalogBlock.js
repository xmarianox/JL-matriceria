import React, {Component} from 'react';

import CatalogSelector from './CatalogSelector';
import ProductList from './ProductList';
import '../styles/components/CatalogBlock.scss';

class CatalogBlock extends Component {

    render() {
        const dataset = this.props.catalogData;

        return (
            <article className="CatalogBlock">
                <div className="CatalogBlock-header">
                    <h2>catálogo</h2>
                    <p>Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. tellus a odio tincidunt auctor a</p>
                </div>
                
                <CatalogSelector items={dataset.catalog}  />

                <ProductList productList={dataset.list} />
            </article>
        );
    }

}

export default CatalogBlock;