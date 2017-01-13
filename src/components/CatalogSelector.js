import React, {Component} from 'react';

class CatalogSelector extends Component {
    render() {
        return (
            <ul>
                { this.props.items.map((item) => {
                        return <li key={item.id}>{item.lable}</li>
                    })
                }
            </ul>
        );
    }
}

export default CatalogSelector;