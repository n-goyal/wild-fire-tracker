import { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker.js'
import LocationInfoBox from './LocationInfoBox.js'

const Map = ({ eventData, center, zoom}) => {
  const [locationInfo, setLocationInfo] = useState(null)
  
  const markers = eventData.map(ev => {
    if(ev.categories[0].id == 8) {
      return <LocationMarker key={ev.geometries[0].coordinates[0]} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id:ev.id, title: ev.title})} />
    }
    return null
  })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB-x7jGBq_rGO-yhDp4G_qnkHE-Zhi9OQ8'}}
        defaultCenter={ center }
        defaultZoom={ zoom }
      >
      {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={ locationInfo } />}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 27.0238,
    lng: 74.2179
  },
  zoom: 6
}

export default Map;
