import { combineReducers } from 'redux'
import otpSubmit from './registration'
import phoneSubmit from './registration'
import locationSubmit from './location'

export default combineReducers({
    phone: phoneSubmit,
    otp: otpSubmit,
    location: locationSubmit,
})