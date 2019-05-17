import React, { useRef } from "react";
import GoogleMaps from "../../hooks/map_hook.js"
console.log("GMAPAPAPAPA", GoogleMaps)
const API_KEY = process.env.REACT_APP_GOOGLE_MAP_KEYS;


const initialConfig = {
  zoom: 10,
  center:{ lat: 45.421532, lng: -75.697189 }
}

const GMap = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <GoogleMaps initialConfig={ initialConfig }
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}


  // const googleMap = useGoogleMap(API_KEY);
  // const mapContainerRed = useRef(null);





export default GMap;
