import React from 'react'
import styled from 'styled-components'
import { colors } from './../styles/theme'
import { buttonInit, absoluteCentered } from './../styles/mixins'

export default props =>
  <NlButton onClick={props.clickFunction || null} size={'3.5rem'} className={`nl-button`}>
    <svg height={props.height} width={props.width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <title>Newsletter</title>
      <g strokeLinecap="square" strokeWidth="2">
        <polyline fill="none" points="2 5 16 16 30 5" strokeLinecap="butt" />
        <rect height="24" width="30" fill="none" rx="3" ry="3" x="1" y="4" />
      </g>
    </svg>
  </NlButton>

const NlButton = styled.button`
  ${buttonInit};
  width: 3.125rem;
  height: 3.125rem;
  position: relative;
  svg {
    ${absoluteCentered};
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 250ms ease-in-out;
    fill: ${colors.white};
    stroke: ${colors.white};
  }
  &:hover {
    svg {
      fill: ${colors.pink};
      stroke: ${colors.pink};
    }
  }
`