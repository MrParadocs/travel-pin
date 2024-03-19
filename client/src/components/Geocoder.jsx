import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import mapboxgl from 'mapbox-gl';
import { useControl } from 'react-map-gl';

import './Geocoder.scss'

const Geocoder = () => {
    const ctrlGeocoder = new MapboxGeocoder({
        accessToken: import.meta.env.VITE_MAPBOX_KEY,
        mapboxgl: mapboxgl,
        marker: {
            color: '#3498DB'
        },
        collapsed: false,
    })

    useControl(() => ctrlGeocoder)

    return (
        null
    )
}

export default Geocoder