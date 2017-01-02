import React, { Component } from 'react';
// styles
import '../styles/components/AppBar.scss';
// assets
import icMatriceria from '../images/ic_jl_matriceria.png';
import icPlastic from '../images/ic_jl_plastic.png';

class Appbar extends Component {

    constructor() {
        super();

        this.state = {
            menu_open: false
        };
    }

    _toggleMenu() {
        this.setState({ menu_open: !this.state.menu_open });
    }

    render() {
        return (
            <header className="AppBar">
                <div className="AppBar-container">
                    <button onClick={this._toggleMenu.bind(this)} className={ this.state.menu_open ? 'btn-hamburger active' : 'btn-hamburger' } type="button" role="button"><span className="lines"></span></button>
                    <img src={icMatriceria} alt="JL Matriceria" className="AppBar-logo" />
                    <img src={icPlastic} alt="JL Plastic" className="AppBar-logo" />
                </div>
            </header>
        );
    }
}

export default Appbar;