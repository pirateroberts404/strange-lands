import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { setMenuState } from './../state/actions'
import { flexColumn, media, navType } from './../styles/mixins'
import { colors } from './../styles/theme'

const Navigation = props =>
  <Nav>
    {props.menu_items.map((item, i) =>
      <NavLink 
        to={`/${item.slug}`} 
        key={item.slug + i}
        onClick={() => props.set_menu(false)}
        className={`/${item.slug}` === props.route && 'active'}
      >
        <span>{item.title}</span>
      </NavLink>
    )}
  </Nav>

export default connect(
  state => ({
    route: state.routeState,
  }),
  dispatch => ({
    set_menu: (bool) => dispatch(setMenuState(bool))
  })
)(Navigation)

const Nav = styled.nav`
  ${flexColumn};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding-top: 6rem;
  ${media.desktopNav`
    padding-top: 0;
  `}
`

const NavLink = styled(Link)`
  ${navType};
  color: ${colors.lt_blue};
  transition: transform 350ms ease, color 350ms ease;
  will-change: transform, color;
  text-decoration: none;
  position: relative;
  cursor: e-resize; 
  &:hover {
    color: ${colors.pink};
  }
  ${media.touch`
    color: ${colors.lt_blue}!important;
    &:hover {
      color: ${colors.lt_blue}!important;
    }
  `}
  &.active {
    color: ${colors.mint}!important;
  }
`