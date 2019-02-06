import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo = props => {
  const [loaded, isLoaded] = React.useState(false)
  return (
    <LogoWrapper to={`/`} className={props.route === '/' && 'active'} alpha={loaded ? 1 : 0}>
      <img src={`/assets/strange-lands-logo.svg`} onLoad={() => isLoaded(true)}/>
    </LogoWrapper>
  )
}


export default connect(
  state => ({ route: state.routeState })
)(Logo)

// STYLES
const LogoWrapper = styled(Link)`
  width: 100%;
  height: 100%;
  display: block;
  transition: opacity 250ms ease-in-out;
  opacity: ${props => props.alpha};
  will-change: opacity;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &.active {
    pointer-events: none;
  }
`
