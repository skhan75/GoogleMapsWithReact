import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMaps from './components/GoogleMaps'

function App() {
  console.log("NAAVVVVVVAVAVVAVAVAVVA", navigator)
  return (
    <div style={{width: '100vw', height: '100vh'}}>
     
      <GoogleMaps
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_KEYS}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      / >
    
    </div>
  );
}

export default App;
