import React, {Component} from 'react';
import '../styles/components/QuantitySelector.scss';
import Select from 'react-select';

class QuantitySelector extends Component {
    
    constructor() {
        super();

        this.state = {
            options : [
                { value: 1, label: 1 },
                { value: 2, label: 2 },
                { value: 3, label: 3 },
                { value: 4, label: 4 },
                { value: 5, label: 5 },
                { value: 6, label: 6 },
                { value: 7, label: 7 },
                { value: 8, label: 8 },
                { value: 9, label: 9 }
            ],
            active: 'default'
        };
    }

    _handleChange(item) {
        this.setState({
            active: item.value
        });
    }

    render() {
        return (
            <div className="QuantitySelector">
                <em>Cantidad</em>

                <Select 
                    name="quantity-select"
                    value={this.state.active}
                    clearable={false}
                    searchable={false}
                    options={this.state.options}
                    className="order-selector"
                    onChange={this._handleChange.bind(this)}
                />
            </div>
        );
    }
}

export default QuantitySelector;