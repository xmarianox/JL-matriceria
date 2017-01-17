import React, {Component} from 'react';
import '../styles/components/CatalogOrderSelector.scss';


class CatalogOrderSelector extends Component {

    render() {
        return (
            <div className="CatalogOrderSelector">
                <select>
                    <option>Ordenar por</option>
                    <option value="mas_relevantes">Más relevantes</option>
                    <option value="menor_precio">Menor precio</option>
                    <option value="mayor_precio">MAyor precio</option>
                </select>
            </div>
        );
    }
}

export default CatalogOrderSelector;