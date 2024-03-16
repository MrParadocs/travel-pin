import React, { useState } from 'react';
import { useMapEvents, Marker } from 'react-leaflet';

const Geocoder = () => {
  const [markers, setMarkers] = useState([]); // State to store markers

  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      console.log('Clicked:', lat, lng);

      // Create a new marker object with the clicked coordinates
      const newMarker = {
        id: markers.length + 1, // Generate a unique ID for the marker
        latlng: [lat, lng],
      };

      // Update the markers state with the new marker
      setMarkers([...markers, newMarker]);
    },
  });

  return (
    <>
      {/* Render markers on the map */}
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.latlng} />
      ))}
    </>
  );
};

export default Geocoder;
