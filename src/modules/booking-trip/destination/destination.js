import { useEffect } from 'react'
import { useMap } from "react-leaflet"
import { useDispatch, useSelector } from "react-redux"
import { GeoSearchControl } from 'leaflet-geosearch'

import locationSubmit2 from '../../../redux/actions/location'

import 'leaflet/dist/leaflet.css'
import 'leaflet-geosearch/assets/css/leaflet.css'

const Destination = (props) => {
    const map = useMap()
    const provider = { props }
    const dispatch = useDispatch()

    const handleSubmits = location2 => {
        const action = locationSubmit2.locationSubmit2(location2)
        dispatch(action)
    }

    useEffect(() => {
        const search = new GeoSearchControl({
            provider: provider,
            searchLabel: 'Where would you like to go ?',
            showMarker: true,
            showPopup: true,
            popupFormat: ({ result }) => `${result.label}`,
            resultFormat: ({ result }) => `${result.label}`,
            keepResult: true
        })

        map.addControl(search) 
        
        map.on('geosearch/showlocation', function() {
            handleSubmits(search.map._lastCenter)
        })

        return () => {
            map.removeControl(search);
        }
    }, [props])

    return null
}

export default Destination