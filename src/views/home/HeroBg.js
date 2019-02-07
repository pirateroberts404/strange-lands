import React from 'react'
import { FitImage } from './../../components'
import styled from 'styled-components'

export default props =>
	<Bg>
		<FitImage src={props.image} contain={`cover`} />
	</Bg>

const Bg = styled.aside`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	&:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`

