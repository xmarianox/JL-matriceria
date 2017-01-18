import React, {Component} from 'react';
import '../styles/components/ProductDetailBlock.scss';
//components
import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';

class ProductDetailBlock extends Component {
    render() {
        const color = [
            {id: 1, label: 'Rojo', code: '#fa4941'},
            {id: 2, label: 'Verde', code: '#00f892'},
            {id: 3, label: 'Azul', code: '#1c2f63'},
            {id: 4, label: 'Amarillo', code: '#ffa200'}
        ];

        const size = [
            {id: 1, label: 'Lorem Ipsum dolor sit.', code: 'S'},
            {id: 2, label: 'Lorem Ipsum sit.', code: 'M'},
            {id: 3, label: 'Lorem dolor sit.', code: 'L'}
        ];

        return (
            <article className="ProductDetailBlock">
                <div className="row">
                    <img className="pd-image" src="http://placehold.it/414x350/E8117F/000000" alt="producto" />
                </div>{/* row */}

                <div className="row">
                    <div className="pd-info-container">
                        <div className="pd-item-container">
                            <span className="pd-new-tag">NEW!</span>

                            <h2>Jl Matrceria web-22</h2>

                            <span className="pd-price">$150</span>

                            <p>Orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare.</p>
                        </div>

                        <div className="pd-item-container">
                            <ColorSelector colorLists={color} />
                        </div>                    

                        <div className="pd-item-container">
                            <SizeSelector sizeLists={size} />
                        </div>

                        <div className="pd-item-container">
                            <em>cantidad</em>
                        </div>
                    </div>

                </div>{/* row */}
            </article>
        );
    }
}

export default ProductDetailBlock;