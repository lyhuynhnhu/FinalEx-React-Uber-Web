import ContactTitle from './contact_title/contact_title'
import ContactForm from './contact_form/contact_form'

import './form.css'

const Form = () => {
    return (
        <article>
            <section>
                <div className="contact-form">
                    <ContactTitle />
                    <ContactForm />
                </div>
            </section>
        </article>
    )
}

export default Form