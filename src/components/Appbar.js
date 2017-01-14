import React, { Component } from 'react';
import {Link} from 'react-router';
import Search from './Search';
import UserBlock from './UserBlock';
import CartBlock from './CartBlock';
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
            <div>
                <header className="AppBar">
                    <div className="AppBar-container">
                        <button onClick={this._toggleMenu.bind(this)} className={ this.state.menu_open ? 'btn-hamburger active' : 'btn-hamburger' } type="button" role="button"><span className="lines"></span></button>
                        
                        <img src={icMatriceria} alt="JL Matriceria" className="AppBar-logo" />
                        <img src={icPlastic} alt="JL Plastic" className="AppBar-logo" />

                        <Search />
                    </div>
                </header>

                <nav className={ this.state.menu_open ? 'Menu open' : 'Menu' }>

                    <UserBlock userName="Mariano" />

                    <CartBlock itemsQuantity={1} cartAmount={45.56} />

                    <ul>
                        <li>
                            <span>CATÁLOGO</span>
                            <ul>
                                <li><Link to="/catalogo/vasos" onClick={this._toggleMenu.bind(this)}>Vasos</Link></li>
                                <li><Link to="/catalogo/servilleteros" onClick={this._toggleMenu.bind(this)}>Servilleteros</Link></li>
                                <li><Link to="/catalogo/tuppers" onClick={this._toggleMenu.bind(this)}>Tuppers</Link></li>
                            </ul>
                        </li>
                        <li>MERCHANDISING</li>
                        <li>CONTACTO</li>
                        <li>MEDIOS DE PAGO</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Appbar;