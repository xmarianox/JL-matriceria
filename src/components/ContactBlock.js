import React, {Component} from 'react';
import '../styles/components/ContactBlock.scss';

class ContactBlock extends Component {
    render() {
        return (
            <article className="ContactBlock">
                <div>
                    <h2>contacto</h2>

                    <p>Luis María Drago 5252, Munro, Buenos Aires 011 4761-7305</p>
                </div>

                <div></div>
            </article>
        );
    }
}

export default ContactBlock;