import React, { Component } from 'react';
// styles
import '../styles/components/Search.scss';
// assets
import icSearch from '../images/icons/ic_search.svg';

class Search extends Component {

    constructor() {
        super();

        this.state = {
            search_open: false
        };
    }

    _toggleSearchBar() {
        this.setState({ search_open: !this.state.search_open });
    }

    render() {
        return (
            <div className={this.state.search_open ? 'Search open' : 'Search'}>
                <button className="Search-btn" onClick={this._toggleSearchBar.bind(this)}>
                    <img src={icSearch} alt="Search" />
                </button>

                <div className="Search-bar">
                    <input type="text" name="" id="" />
                </div>                
            </div>
        );
    }
}

export default Search;