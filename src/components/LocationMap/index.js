import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

import styles from './styles'
import { flexRow } from '../../styles/mixins';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const createMapOptions = (maps) => {
 return {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: styles,
    disableDefaultUI: true
  };
}

const LocationList = props =>
  <div className="location-list">
    <ul>
      {props.dispensaries.map((item, i) =>
        <li key={`loc-list-${i}`}>{item.vendor_name}</li>
      )}
    </ul>
  </div>

export default class extends React.Component {
  componentWillMount() {
    console.log(this.props.data)
  }
  render() {
    return (
      <LocationsWrapper>
        <LocationList dispensaries={this.props.data.dispensary_list}/>
        <MapWrapper>
          <div style={{ height: '60rem', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ 
                key: 'AIzaSyBcxJlkU-0oKaxCS41iSGN4jruHXnD246o'
              }}
              options={createMapOptions}
              defaultCenter={this.props.data.center}
              defaultZoom={this.props.data.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </MapWrapper>
      </LocationsWrapper>
    )
  }
}

const LocationsWrapper = styled.div`
  ${flexRow};
  height: 40rem;
  width: 70rem;
`

const MapWrapper = styled.div`
  width: 60rem;
  height: 100%;
`