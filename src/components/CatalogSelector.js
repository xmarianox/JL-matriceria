import React, {Component} from 'react';
import '../styles/components/CatalogSelector.scss';

class CatalogSelector extends Component {

    constructor() {
        super();

        this.state = {
            activeIndex: 1
        };
    }

    _handleToggle(index) {
        this.setState({ activeIndex: index });
    }

    render() {

        let active = this.state.activeIndex;

        return (
            <ul className="CatalogSelector">
                { this.props.items.map((item) => {
                        return <li key={item.id} onClick={this._handleToggle.bind(this, item.id)} className={item.id === active ? 'active' : ''}>{item.label}</li>
                    })
                }
            </ul>
        );
    }



}

export default CatalogSelector;