import React from 'react'

import background from '../../../../images/background.jpg'
import './information.css'

const Information = () => {
    return (
        <div className="information">
            <img src={background} />
            <div className="info-content">
                <span className="info-span">Your ride, on demand</span>
                <p className="info-p">Whether you're headed to work, the airport or out on the town,
                    Uber connects you with a reliable ride in minutes. One tap and a car comes directly to you.
                </p>
            </div>
        </div>
    )
}

export default Information