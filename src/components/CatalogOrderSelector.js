import React, {Component} from 'react';
import '../styles/components/CatalogOrderSelector.scss';
//select component
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class CatalogOrderSelector extends Component {

    constructor() {
        super();

        this.state = {
            options : [
                { value: 'default', label: 'Ordenar por' },
                { value: 'mas_relevantes', label: 'Más relevantes' },
                { value: 'menor_precio', label: 'Menor precio' },
                { value: 'mayor_precio', label: 'Mayor precio' }
            ],
            active: 'default'
        };
    }

    _handleChange(item) {
        // console.log(`event: ${item.label}`);
        this.setState({
            active: item.value
        });
    }

    render() {
        return (
            <div className="CatalogOrderSelector">
                <Select 
                    name="catalog-order"
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

export default CatalogOrderSelector;