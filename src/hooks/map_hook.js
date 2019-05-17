import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import ReactDOM from 'react-dom';

function MapContainer({ initialConfig, mapContainerRef }) {
  console.warn("THIS IS STEP 2", initialConfig.center)
  return (
    <GoogleMap
      defaultZoom={ initialConfig.zoom }
      defaultCenter={ initialConfig.center }
    >
      <Marker
        position={ initialConfig.center }
      />
    </GoogleMap>
  )
}

const GoogleMaps = withScriptjs(withGoogleMap(MapContainer));
export default GoogleMaps;
