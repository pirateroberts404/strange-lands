import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { media } from './../styles/mixins'
import { spacing } from './../styles/theme'

const LogoNode = document.getElementById('logo')

class LogoPortal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }
  componentDidMount() {
    LogoNode.appendChild(this.el)
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    )
  }
}

const Logo = props => {
  const [loaded, isLoaded] = React.useState(false)
  return (
    <LogoPortal>
      <LogoPosition>
        <LogoWrapper to={`/`} className={props.route === '/' && 'active'} alpha={loaded ? 1 : 0}>
          <img src={`/assets/strange-lands-logo.svg`} onLoad={() => isLoaded(true)}/>
        </LogoWrapper>
      </LogoPosition>
    </LogoPortal>
  )
}


export default connect(
  state => ({ route: state.routeState })
)(Logo)

// STYLES
const LogoPosition = styled.div`
  display: block;
  position: fixed;
  z-index: 12000;
  width: 8rem;
  top: ${spacing.single_pad};
  left: ${spacing.single_pad};
  ${media.desktopNav`
    width: 14rem;
  `}
`

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
