import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './contact_title.css';

const ContactTitle = () => {
    return (
        <div className="contact-title">
            <FontAwesomeIcon icon={faEnvelope} size="sm" className="icon-envelop" />
            <p className="contact-us">Contact us</p>
        </div>
    )
}

export default ContactTitle