import React, {Component} from 'react';
import '../styles/components/ContactBlock.scss';

class ContactBlock extends Component {
    render() {
        return (
            <article className="ContactBlock">
                <div className="ContactBlock-item">
                    <h2>contacto</h2>

                    <p>Luis María Drago 5252, Munro, Buenos Aires<br/> 011 4761-7305</p>
                </div>

                <div className="ContactBlock-item">

                </div>
            </article>
        );
    }
}

export default ContactBlock;