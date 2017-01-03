import React, { Component } from 'react';
// styles
import '../styles/components/Search.scss';
// assets
import icSearch from '../images/ic_search.svg';

class Search extends Component {

    render() {
        return (
            <div className="Search">
                <button className="Search-btn"><img src={icSearch} alt="Search" /></button>
            </div>
        );
    }
}

export default Search;