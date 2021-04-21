import React from 'react';
import { useFormik } from 'formik';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { validationRules, validateValuesByRule } from '../utils/validation';

import './contact_form.css';
import spinnerIcon  from '../../../images/spinner-icon.png';

const options = [
    {
        label: "Enter type user",
        value: "type",
    },
    {
        label: "Rider",
        value: "rider",
    },
    {
        label: "Driver",
        value: "driver",
    }
];

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            typeUser: '',
            message: ''
        },
        validate: (values) => {
            return validateValuesByRule({
                name: validationRules.required,
                typeUser: validationRules.typeUser,
                message: validationRules.required
            })(values);
        },
        onSubmit: (values, actions) => {
            setTimeout(() => {
                actions.setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
            }, 2000)
        }
    });

    return (
        <form method="post" className="form-horizontal" onSubmit={formik.handleSubmit}>
            <div className="content">
                <div className="left-field">
                    <div className={classNames({
                        'form-group': true,
                        'has-error': formik.touched.name && formik.errors.name
                    })}>
                        <label className="label-control">Your name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="name-control"
                            placeholder="Enter the issue"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange} />
                    </div>
                    {formik.touched.name && formik.errors.name && (
                        <span className="error-control">
                            {formik.errors.name}
                        </span>
                    )}

                    <div className={classNames({
                        'form-group': true,
                        'has-error': formik.touched.typeUser && formik.errors.typeUser
                    })}>
                        <label className="label-control">Select:</label>
                        <select
                            id="typeUser"
                            name="typeUser"
                            className="select-control"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    {formik.touched.typeUser && formik.errors.typeUser && (
                        <span className="error-control">
                            {formik.errors.typeUser}
                        </span>
                    )}
                </div>
                <div className="right-field">
                    <div className={classNames({
                        'form-group': true,
                        'has-error': formik.touched.message && formik.errors.message
                    })}>
                        <label className="label-control" style={{verticalAlign:"top"}}>Message:</label>
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            className="msg-control"
                            placeholder="Enter your message"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange} />
                    </div>
                    {formik.touched.message && formik.errors.message && (
                        <span className="error-control">
                            {formik.errors.message}
                        </span>
                    )}
                </div>
            </div>
            <div>
                <button 
                type="submit" 
                disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
                className="btn-control">
                    {formik.isSubmitting ? 
                    <img src={spinnerIcon} className="spinner-icon" alt="spinner-icon" /> :
                    <FontAwesomeIcon icon={faArrowRight} size="2x" />}
                </button>
        </div>
        </form>
    )
}

export default ContactForm;