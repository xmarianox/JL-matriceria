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
        //console.log('Open Search Bar');
    }

    render() {
        return (
            <div className="Search">
                <button className="Search-btn" onClick={this._toggleSearchBar.bind(this)}>
                    <img src={icSearch} alt="Search" />
                </button>


            </div>
        );
    }
}

export default Search;