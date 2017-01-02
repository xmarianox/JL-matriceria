import React, { Component } from 'react';
// assets
import icMatriceria from '../../images/ic_jl_matriceria.png';
import icPlastic from '../../images/ic_jl_plastic.png';

class Appbar extends Component {

    render() {
        return (
            <header className="Appbar">
                <img src={icMatriceria} alt="JL Matriceria" className="Appbar-icon" />
                <img src={icPlastic} alt="JL Plastic" className="Appbar-icon" />
            </header>
        );
    }
}

export default Appbar;