import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import TripBooking from "./trip-booking"

import 'leaflet/dist/leaflet.css'
import 'leaflet-geosearch/assets/css/leaflet.css'
import './booking.css'

const Booking = () => {
    return (
        <article>
            <MapContainer className="map-container" center={[10.8231, 106.6297]} zoom={12} scrollWheelZoom={true} zoomControl={false}>
                <TripBooking />
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[10.8231, 106.6297]}>
                    <Popup>Ho Chi Minh City</Popup>
                </Marker>
            </MapContainer>
        </article>
    )
}

export default Booking