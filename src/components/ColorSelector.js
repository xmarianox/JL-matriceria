import React, {Component} from 'react';
import '../styles/components/ColorSelector.scss';

class ColorSelector extends Component {

    constructor() {
        super();

        this.state = {
            selectedItem: ' '
        };
    }

    _handleClick(item) {
        this.setState({
            selectedItem: item.label
        });
    }

    render() {
        return (
            <div className="ColorSelector">
                <em>Color</em>

                <div className="color-container">
                    <ul>
                        { 
                            this.props.colorLists.map((item) => {
                                return <li key={item.id} style={{backgroundColor: `${item.code}`}} onClick={this._handleClick.bind(this, item)}></li>
                            })
                        }
                    </ul>

                    <p>{this.state.selectedItem}</p>
                </div>
            </div>
        );
    }
}

export default ColorSelector;