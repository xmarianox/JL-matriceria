import React, { Component } from 'react';
import '../styles/components/UserBlock.scss';

class UserBlock extends Component {

    constructor() {
        super();

        this.state = {
            isUserLogged: false
        };
    }

    _renderComponent(userName) {

        if (this.state.isUserLogged) {
            return (
                <div className="UserBlock loggedIn">
                    <span>Hola {userName}!</span>
                </div>
            );
        } else {
            return (
                <div className="UserBlock">
                    <a href="">logueate</a>
                    <span className="divider"></span>
                    <a href="">registrate</a>
                </div>
            );
        }
    }

    render() {
        return this._renderComponent(this.props.userName);
    }
}

export default UserBlock;