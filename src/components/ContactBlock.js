import React, {Component} from 'react';
import '../styles/components/ContactBlock.scss';

class ContactBlock extends Component {
    render() {
        return (
            <article className="ContactBlock">
                <div className="ContactBlock-item">
                    <h2>contacto</h2>

                    <p>Luis María Drago 5252, Munro, Buenos Aires<br/> 011 4761-7305</p>

                    <form>
                        <div className="form-control">
                            <input type="text" name="contact-name" id="contact-name" placeholder="Nombre" />
                        </div>

                        <div className="form-control">
                            <input type="email" name="contact-email" id="contact-email" placeholder="Email" />
                        </div>

                        <div className="form-control">
                            <textarea name="contact-text" id="contact-text" placeholder="Consulta"></textarea>
                        </div>

                        <div className="form-control">
                            <button className="btn btn_action">Enviar</button>
                        </div>
                    </form>
                </div>

                <div className="ContactBlock-item">

                </div>
            </article>
        );
    }
}

export default ContactBlock;