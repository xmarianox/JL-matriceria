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
                            <label htmlFor="contact-name">Nombre</label>
                            <input type="text" name="contact-name" id="contact-name" />
                        </div>

                        <div className="form-control">
                            <label htmlFor="contact-email">Email</label>
                            <input type="email" name="contact-email" id="contact-email" />
                        </div>

                        <div className="form-control">
                            <label htmlFor="contact-text">Consulta</label>
                            <textarea name="contact-text" id="contact-text"></textarea>
                        </div>

                        <div className="form-control">
                            <button className="btn btn_action">Enviar</button>
                        </div>
                    </form>
                </div>

                <div className="ContactBlock-item">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.672576213905!2d-58.530472084565524!3d-34.53652256145324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0cbb1827f8f%3A0xcb53be745807676f!2sLuis+Mar%C3%ADa+Drago+5252%2C+B1605AZB+Munro%2C+Buenos+Aires!5e0!3m2!1ses-419!2sar!4v1484018978934" width="600" height="450" frameBorder="0" allowFullScreen></iframe>
                </div>
            </article>
        );
    }
}

export default ContactBlock;