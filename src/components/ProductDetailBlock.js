import React, {Component} from 'react';
import '../styles/components/ProductDetailBlock.scss';
//components
import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';

class ProductDetailBlock extends Component {

    _showNewTag(product) {
        return product.new_label ? <span className="pd-new-tag">NEW!</span> : '';
    }

    render() {
        return (
            <article className="ProductDetailBlock">
                <div className="row">
                    <img className="pd-image" src={this.props.producto.image} alt={this.props.producto.name} />
                </div>{/* row */}

                <div className="row">
                    <div className="pd-info-container">
                        <div className="pd-item-container">
                            {this._showNewTag(this.props.producto)}

                            <h2>{this.props.producto.name}</h2>

                            <span className="pd-price">${this.props.producto.price}</span>

                            <p>{this.props.description}</p>
                        </div>

                        <div className="pd-item-container">
                            <ColorSelector colorLists={this.props.producto.available_color} />
                        </div>                    

                        <div className="pd-item-container">
                            <SizeSelector sizeLists={this.props.producto.available_size} />
                        </div>

                        <div className="pd-item-container">
                            <QuantitySelector />
                        </div>

                        <div className="pd-item-container">
                            <button className="btn btn_action">comprar</button>
                        </div>
                    </div>

                </div>{/* row */}
            </article>
        );
    }
}

export default ProductDetailBlock;