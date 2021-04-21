import React from 'react';
import OTPForm from './otp-form';

import './otp.css'

const OTP = () => {
    return (
        <article>
            <section>
                <div className="register-otp">
                    <OTPForm />
                </div>
            </section>
        </article>
    )
}

export default OTP