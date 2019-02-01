import React from 'react'
import styled from 'styled-components'
import { buttonInit, absoluteCentered } from './../styles/mixins'
import { colors } from './../styles/theme'

export default props =>
  <MenuButton onClick={props.clickFunction || null}>
    <svg height={props.height} width={props.width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill={colors.white}>
        <path d="M30,15H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h28c0.6,0,1-0.4,1-1S30.6,15,30,15z"/>
        <path d="M30,6H2C1.4,6,1,6.4,1,7s0.4,1,1,1h28c0.6,0,1-0.4,1-1S30.6,6,30,6z" fill={colors.white}/>
        <path d="M30,24H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h28c0.6,0,1-0.4,1-1S30.6,24,30,24z" fill={colors.white}/>
      </g>
    </svg>
  </MenuButton>

const MenuButton = styled.button`
  ${buttonInit}
  width: 32px;
  height: 32px;
  position: fixed;
  top: 1.5rem;
  right: 1.25rem;
  z-index: 8000;
  svg {
    ${absoluteCentered};
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`