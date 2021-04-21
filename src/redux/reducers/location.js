import {combineReducers} from 'redux'
import {LOCATION1_SUBMIT, LOCATION2_SUBMIT} from '../constants/ActionTypes'

const initialState = {
    location1: '',
    location2: '',
}
const locationSubmit = (state = initialState, action) => {
    switch (action.type) {
        case LOCATION1_SUBMIT:
            return {
                ...state,
                location1: action.payload.location1,
            }
        case LOCATION2_SUBMIT:
            return {
                ...state,
                location2: action.payload.location2,
            }
        default: 
        return {
            ...state
        }
    }}

export default combineReducers({
    locationSubmit
})