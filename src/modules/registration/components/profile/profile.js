import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCamera, faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

import './profile.css'

const Profile = () => {
    return (
        <article>
            <section>
                <form action="#" className="form-profile">
                    <h2>Enter your Info</h2>
                    <input type="text" className="fullname-ctrl" placeholder="Enter your full name" />
                    <label className="gender-control">Select gender</label>
                    <div className="gender">
                        <button className="gender-icon"><FontAwesomeIcon icon={faMars} /></button>
                        <button className="gender-icon"><FontAwesomeIcon icon={faVenus} /></button>
                    </div>
                    <div className="upload-picture">
                        <button className="btn-upload-pic" type="button">
                            <FontAwesomeIcon icon={faCamera} size="2x" />
                        </button>
                        <span className="txt-pic">Upload profile picture</span>
                    </div>
                    <button type="button" className="btn-update-profile">
                        <FontAwesomeIcon icon={faArrowRight} size="2x" />
                    </button>
                </form>
            </section>
        </article>
    )
}

export default Profile