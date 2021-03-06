import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import classNames from 'classnames';
import { validationRules, validateByRules } from '../../utils/validation'
import submit from '../../../../redux/actions/phone'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import spinnerIcon from '../../../../images/spinner-icon.png'

import './phone.css'

const FormPhone = () => {
    const formik = useFormik({
        initialValues: {
            phone: '',
            agree: false,
        },
        validate: (values) => {
            return validateByRules({
                phone: validationRules.phone,
                agree: validationRules.checkBox,
            })(values);
        },
    })
    const dispatch = useDispatch();
    const redirectTo = useSelector(state => state.phone.phoneSubmit.redirectTo)
    const handleSubmits = phone => {
        const action = submit(phone)
        dispatch(action)
    }
    const history = useHistory();
    useEffect(() => {
        if(redirectTo) {
            console.log(redirectTo)
            history.push({pathname: '../registration-otp/otp'})
        }
    })
    return (
        <form method="post" className="phone-form" onSubmit={formik.handleSubmit}>
            <h3>Get moving with Uber</h3>
            <div className={classNames({
                'phone-group': true,
                'has-error': formik.touched.name && formik.errors.name
            })}>
                <label className="phone-label-ctrl">+84</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="phone-control"
                    placeholder="Enter your mobile number"
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange} />
            </div>
            {formik.touched.phone && formik.errors.phone && (
                <span className="error-control">
                    {formik.errors.phone}
                </span>
            )}

            <div className={classNames({
                'terms-group': true,
                'has-error': formik.touched.name && formik.errors.name
            })}>
                <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    className="checkbox-control"
                    value={formik.values.agree}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange} />
                <label className="terms-control">Agree Terms and conditions</label>
            </div>
            {formik.touched.agree && formik.errors.agree && (
                <span className="error-control">
                    {formik.errors.agree}
                </span>
            )}
            <div>
                <button 
                type="button" 
                disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
                className="btn-control"
                onClick={() => handleSubmits(formik.values.phone)}>
                    {formik.isSubmitting ? 
                    <img src={spinnerIcon} className="spinner-icon" alt="spinner-icon" /> :
                    <FontAwesomeIcon icon={faArrowRight} size="2x" />}
                </button>
            </div>
        </form>
    )
}

export default FormPhone