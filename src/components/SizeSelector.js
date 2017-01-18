import React, {Component} from 'react';
import '../styles/components/SizeSelector.scss';

class SizeSelector extends Component {
    constructor() {
        super();

        this.state = {
            selectedItem: ' ',
            active: 0
        };
    }

    _handleClick(item) {
        this.setState({
            selectedItem: item.label,
            active: item.id
        });
    }


    render() {
        return (
            <div className="SizeSelector">
                <em>Tamaño</em>

                <div className="size-container">
                    <ul>
                        { 
                            this.props.sizeLists.map((item) => {
                                return <li key={item.id} onClick={this._handleClick.bind(this, item)} className={this.state.active === item.id ? 'active' : ''}>{item.code}</li>
                            })
                        }
                    </ul>

                    <p>{this.state.selectedItem}</p>
                </div>
            </div>
        );
    }
}

export default SizeSelector;