import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

import styles from './styles'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const createMapOptions = (maps) => {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: styles,
    disableDefaultUI: true
  };
}


export default class extends React.Component {
  static defaultProps = {
    center: {
      lat: 37.8213048,
      lng: -122.3217429
    },
    zoom: 11
  };

  componentDidMount() {
    console.log(styles)
  }
  

  render() {
    return (
      <MapWrapper>
        <div style={{ height: '60rem', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ 
              key: 'AIzaSyBcxJlkU-0oKaxCS41iSGN4jruHXnD246o'
            }}
            options={createMapOptions}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </MapWrapper>
    )
  }
}

const MapWrapper = styled.div`
  width: 60rem;
  height: 40rem;
`