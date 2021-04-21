import * as types from '../constants/ActionTypes'

export const locationSubmit1 = (location1) => {
    return {
        type: types.LOCATION1_SUBMIT,
        payload: {
            location1: location1
        }
        
    }
}
export const locationSubmit2 = (location2) => {
    return {
        type: types.LOCATION2_SUBMIT,
        payload: {
            location2: location2
        }
    }
}

export default {locationSubmit1, locationSubmit2}