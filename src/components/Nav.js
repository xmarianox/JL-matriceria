import React, { Component } from 'react';
import {Link} from 'react-router';
import Search from './Search';
import '../styles/components/Nav.scss';

class Nav extends Component {

    render() {
        return (
            <nav className="NavDesktop">

                <Search />

                <ul>
                    <li>
                        <span>CATÁLOGO</span>
                        <ul>
                            <li><Link to="/catalogo/vasos">Vasos</Link></li>
                            <li><Link to="/catalogo/servilleteros">Servilleteros</Link></li>
                            <li><Link to="/catalogo/tuppers">Tuppers</Link></li>
                        </ul>
                    </li>
                    <li>MERCHANDISING</li>
                    <li>CONTACTO</li>
                    <li>MEDIOS DE PAGO</li>
                </ul>
            </nav>
        );
    }
}

export default Nav;

