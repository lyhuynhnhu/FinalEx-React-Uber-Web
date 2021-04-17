import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import './button.css'

const Button = () => {
    return (
        <div className="registration">
            <button className="re-btn">
                <p className="re-btn-p">Register with Phone</p>
                <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" style={{color: "white"}} />
            </button>
        </div>
    )
}

export default Button