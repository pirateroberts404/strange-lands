import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setMenuState } from './../state/actions'
import { MenuWrapper } from './../styles/components'
import { colors } from './../styles/theme'
import Close from './utils/Close'
import Hamburger from './Hamburger'
import Logo from './Logo'

const MobileMenu = props =>
  <React.Fragment>
    <Header>
      <MenuWrapper className={(props.menu) && 'active'}>
        <Close color={colors.pink} clickFunction={() => props.set_menu(false)} size={`36px`} position={`1.25rem`}/>
        {props.children}
      </MenuWrapper>
      <Overlay className={(props.menu) && 'active'}>
        <LogoPosition><Logo/></LogoPosition>
        <Hamburger clickFunction={() => props.set_menu(true)} />
      </Overlay>
    </Header>
  </React.Fragment>
  

export default connect(
  state => ({
    menu: state.menuState,
    route: state.routeState,
  }),
  dispatch => ({
    set_menu: (bool) => dispatch(setMenuState(bool))
  })
)(MobileMenu)

// STYLES
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 6rem;
  z-index: 8000;
  .close-button {
    margin-top: .5rem;
  }
`

const Overlay = styled.div`
  opacity: 1;
  width: 100%;
  height: 100%;
  display: block;
  transition: opacity 450ms ease-in 50ms;
  will-change: opacity;
  &.active {
    opacity: 0;
  }
`

const LogoPosition = styled.div`
  display: block;
  position: fixed;
  width: 10rem;
  top: 1rem;
  left: 1rem;
  z-index: 9000;
`