import { useEffect } from 'react'
import { useMap } from "react-leaflet"
import { useDispatch } from "react-redux"
import { GeoSearchControl } from 'leaflet-geosearch'

import locationSubmit1 from '../../../redux/actions/location'

import 'leaflet/dist/leaflet.css'
import 'leaflet-geosearch/assets/css/leaflet.css'

const PickUp = (props) => {
    const map = useMap()
    const provider = { props }
    const dispatch = useDispatch()

    const handleSubmits = location1 => {
        const action = locationSubmit1.locationSubmit1(location1)
        dispatch(action)
    }

    useEffect(() => {
        const search = new GeoSearchControl({
            provider: provider,
            seachLabel: 'Where to ?',
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

export default PickUp