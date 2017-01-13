import React, {Component} from 'react';
import ProductList from './ProductList';
import '../styles/components/CatalogBlock.scss';

class CatalogBlock extends Component {

    
    render() {
        return (
            <article className="CatalogBlock">
                <div className="CatalogBlock-header">
                    <h2>catálogo</h2>
                    <p>Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. tellus a odio tincidunt auctor a</p>
                </div>
   
                <ProductList />
            </article>
        );
    }
}

export default CatalogBlock;