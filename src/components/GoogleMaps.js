import React from 'react'
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"



function Map() {
  const { currentLat, currentLng } = __getCurrentLocation();
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189}}
    >
      <Marker 
        position={{ 
          lat: 45.421532, 
          lng: -75.697189
        }}
      />
    </GoogleMap>
  )
}

const __getCoordinates = () => {
  console.log("IS IT HERE")
  return new Promise((resolve, reject) =>  {
    navigator.geolocation.getCurrentPosition(pos => {
      console.log("NEXXTTTXXTXTXT>>>>", pos)
      if(pos.coords.latitude && pos.coords.longitude){
        console.log("HUHFHWUDHWDUDW", pos.coords)
        resolve({ currentLat: pos.coords.latitude, curentLng: pos.coords.longitude });
      }else {
        reject(new Error("No Coordinates"));
      }
    })
  });
}



const  __getCurrentLocation = async() => {
  let currentPos;
  console.log("HEREEEEE>>>>>>>>")
  if('geolocation' in navigator){
    console.log("SHOULD BE HERE")
    currentPos = await __getCoordinates();
    console.log("IN HERE>>>>>>", currentPos)
  }
  console.log("HEREEEEEE", currentPos) 
  return currentPos 
}


// In order to initialize Map with DOM instances, we need to wrap it with
// "withGoogleMap" HOC
const GoogleMaps = withScriptjs(withGoogleMap(Map));

export default GoogleMaps;
