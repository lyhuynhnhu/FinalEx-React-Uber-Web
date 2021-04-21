import { useEffect } from "react"
import { useSelector } from "react-redux"

import { OpenStreetMapProvider } from 'leaflet-geosearch'
import PickUp from "./pickup/pickup"
import Destination from "./destination/destination"

import 'leaflet/dist/leaflet.css'
import 'leaflet-geosearch/assets/css/leaflet.css'
import './booking.css'
import Confirmation from "./confirmation/confirmation"

const TripBooking = () => {
    const location1 = useSelector(state => state.location.locationSubmit.location1)
    const location2 = useSelector(state => state.location.locationSubmit.location2)

    useEffect(() => {
        if(location2 === '' && location1 !== '') {
            return (
                <form className="booking-form">
                    <Destination provider={new OpenStreetMapProvider()} />
                </form>
            )
        }
    },[])

    if(location1 === '') {
        return (
            <form className="booking-form">
                <PickUp provider={new OpenStreetMapProvider()} />
            </form>
        )
    } else {
        if(location2 === '' && location1 !== '') {
            return (
                <form className="booking-form">
                    <Destination provider={new OpenStreetMapProvider()} />
                </form>
            )
        } else {
            const distance = location1.distanceTo(location2).toFixed(0)/1000
            return (
                <form className="booking-form">
                    <Confirmation provider={distance} />
                </form>
            )
        }
    }
}

export default TripBooking