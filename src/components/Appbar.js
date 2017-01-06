import React, { Component } from 'react';
import Search from './Search';
import UserBlock from './UserBlock';
import CardBlock from './CardBlock';
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

                    <CardBlock />

                    <ul>
                        <li>
                            <span>CATÁLOGO</span>
                            <ul>
                                <li><a href="" title="Vasos">Vasos</a></li>
                                <li><a href="" title="Servilleteros">Servilleteros</a></li>
                                <li><a href="" title="Tuppers">Tuppers</a></li>
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