import React, { Component } from 'react';
// styles
import './Appbar.scss';
// assets
import icMatriceria from '../../images/ic_jl_matriceria.png';
import icPlastic from '../../images/ic_jl_plastic.png';

class Appbar extends Component {

    render() {
        return (
            <header className="Appbar">
                <img src={icMatriceria} alt="JL Matriceria" />
                <img src={icPlastic} alt="JL Plastic" />
            </header>
        );
    }
}

export default Appbar;