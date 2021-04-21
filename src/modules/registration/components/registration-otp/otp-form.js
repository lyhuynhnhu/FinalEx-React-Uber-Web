import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useFormik } from 'formik';
import { validationRules, validateByRules } from '../../utils/validation'
import otpSubmit from '../../../../redux/actions/otp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import spinnerIcon from '../../../../images/spinner-icon.png'

import './otp.css'

const OTPForm = () => {
    const formik = useFormik({
        initialValues: {
            otpCol1: '1',
            otpCol2: '4',
            otpCol3: '6',
            otpCol4: '9',
        },
        validate: (values) => {
            return validateByRules({
                otpCol1: validationRules.otpCol,
                otpCol2: validationRules.otpCol,
                otpCol3: validationRules.otpCol,
                otpCol4: validationRules.otpCol,
            })(values);
        }
    })
    const otp = useSelector(state => state.otp.otpSubmit.otp)
    const dispatch = useDispatch();
    const handleSubmit = (col1, col2, col3, col4) => {
        const otp = col1.concat(col2, col3, col4)
        console.log(otp)
        const action = otpSubmit(otp)
        dispatch(action)
    }
    const error = useSelector(state => state.otp.otpSubmit.error)
    const redirectTo = useSelector(state => state.otp.otpSubmit.redirectTo)
    const history = useHistory()

    useEffect(() => {
        if(error) {
            alert('Error!')
        }
        else {
            if(redirectTo) {
                history.push({
                    pathname: '../profile/profile',
                })
            }
        }
    })

    return (
        <form method="post" className="otp-form" onSubmit={formik.handleSubmit}>
            <div className="content-top">
                <span>Enter 4-digit code sent to you at 1847129477.<a href="#">did you enter the correct number?</a></span>
            </div>
            <div className="otp-control">
                <input 
                    type="text"
                    id="otpCol1" 
                    className="otp-field"
                    value={formik.values.otpCol1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    maxLength="1" />
                <input 
                    type="text"
                    id="otpCol2" 
                    className="otp-field"
                    value={formik.values.otpCol2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    maxLength="1" />
                <input 
                    type="text"
                    id="otpCol3" 
                    className="otp-field"
                    value={formik.values.otpCol3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    maxLength="1" />
                <input 
                    type="text"
                    id="otpCol4" 
                    className="otp-field"
                    value={formik.values.otpCol4}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    maxLength="1" />

                {formik.touched.otpCol1 && formik.errors.otpCol1 && (
                    <span className="error-control">
                        {formik.errors.otpCol1}
                    </span>
                )}
                {formik.touched.otpCol2 && formik.errors.otpCol2 && (
                    <span className="error-control">
                        {formik.errors.otpCol2}
                    </span>
                )}
                {formik.touched.otpCol3 && formik.errors.otpCol3 && (
                    <span className="error-control">
                        {formik.errors.otpCol3}
                    </span>
                )}
                {formik.touched.otpCol4 && formik.errors.otpCol4 && (
                    <span className="error-control">
                        {formik.errors.otpCol4}
                    </span>
                )}
            </div>
            <div className="content-bottom">
                <a href="#">I didn't receive code</a>
                <button 
                    type="button" className="otp-btn"
                    disabled={formik.dirty && (formik.errors.otpCol1 || formik.errors.otpCol2 || formik.errors.otpCol3 || formik.errors.otpCol4)}
                    onClick = {() => handleSubmit(formik.values.otpCol1,formik.values.otpCol2,formik.values.otpCol3, formik.values.otpCol4)}>
                    {formik.isSubmitting ? 
                    <img src={spinnerIcon} className="spinner-icon" alt="spinner-icon" /> :
                    <FontAwesomeIcon icon={faArrowRight} size="2x" />}
                </button>
            </div>
        </form>
    )
}

export default OTPForm