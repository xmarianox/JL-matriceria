import React, { Component } from 'react';

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
                <div>
                    <span>Hola {userName}</span>
                </div>
            )
        } else {
            return (
                <div>
                    <a href="">logueate</a>
                    <span>|</span>
                    <a href="">registrate</a>
                </div>
            )
        }
    }

    render() {
        return this._renderComponent(this.props.userName);
    }
}

export default UserBlock;