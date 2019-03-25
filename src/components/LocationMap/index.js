import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import { flexRow, flexColumn, absoluteCentered, media } from './../../styles/mixins'
import { H6, SmallP, SmallA } from './../../styles/components'
import { colors, spacing } from '../../styles/theme'
import styles from './styles'

const MapPin = ({ link }) => <Pin href={link} target="_blank"/>;

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
  <LocationListWrapper>
    <ul>
      {props.dispensaries.map((item, i) =>
        <li key={`loc-list-${i}`}>
          <div className='icon'/>
          <div className='info'>
            <H6>{item.stockist_name}</H6>
            <SmallP>{item.address.street}<br/>{item.address.city}, {item.address.state}<br/>{item.address.zip}</SmallP>
            <SmallA href={`tel:+1-${item.phone}`}>{item.phone}</SmallA>
            <SmallA href={item.stockist_link} target="_blank">Website</SmallA>
          </div>
        </li>
      )}
    </ul>
  </LocationListWrapper>

export default class extends React.Component {
  render() {
    return (
      <LocationsWrapper>
        <LocationList dispensaries={this.props.stockists}/>
        <MapWrapper>
          <div style={{ height: '72rem', width: '70rem' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ 
                key: 'AIzaSyBcxJlkU-0oKaxCS41iSGN4jruHXnD246o'
              }}
              options={createMapOptions}
              defaultCenter={{
                lat: 37.8100000,
                lng: -122.350000
              }}
              defaultZoom={12}
            >
            { this.props.stockists.map((item, i) =>
              <MapPin
                key={item.id}
                lat={item.map_pin.latitude}
                lng={item.map_pin.longitude}
                link={item.map_pin.google_map_link}
              />
            )}
            </GoogleMapReact>
          </div>
        </MapWrapper>
      </LocationsWrapper>
    )
  }
}

const LocationsWrapper = styled.div`
  ${flexColumn};
  width: 100vw;
  padding: 0 ${spacing.single_pad};
  ${media.desktopNav`
    ${flexRow};
    height: 70rem;
    width: 100rem;
    flex-shrink: 0;
  `}
  * {
    color: ${colors.white};
  }
`

const MapWrapper = styled.div`
  width: 100%;
  height: 100vw;
  border: 1px solid ${colors.map_blue};
  overflow: hidden;
  margin-bottom: ${spacing.double_pad};
  ${media.desktopNav`
    ${flexRow};
    height: 70rem;
    width: 100rem;
    margin-bottom: 0;
  `}
`

const LocationListWrapper = styled.div`
  width: 100%;
  height: 100vw;
  margin-right: 1rem;
  margin-bottom: ${spacing.big_pad};
  border: 1px solid ${colors.map_blue};
  overflow-y: scroll;
  ${media.desktopNav`
    width: 29rem;
    height: 70rem;
    margin-bottom: 0;
    flex-shrink: 0;
  `}
  ul {
    padding: ${spacing.single_pad};
  }
  li {
    ${flexRow};
    margin-bottom: ${spacing.double_pad};
  }
  .icon {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${colors.magenta};
    margin-right: ${spacing.single_pad};
    margin-top: ${spacing.micro_pad};
  }
  .info {
    ${flexColumn};
  }
`

const Pin = styled.a`
  width: 14px;
  height: 14px;
  transform: translateX(-14px);
  border-radius: 50%;
  background-color: ${colors.magenta};
  position: relative;
  transition: opacity ease 250ms;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: ${colors.orange};
    &:after {
      border-left: 2px solid ${colors.orange};
    }
  }
  &:before {
    content: '';
    ${absoluteCentered};
    width: 30px;
    height: 30px;
    left: -9px;
    top: 10px;
    display: block;
  }
  &:after {
    content: '';
    transition: all ease 250ms;
    position: absolute;
    left: 6px;
    top: 12px;
    height: 12px;
    border-left: 2px solid ${colors.magenta};
  }
`