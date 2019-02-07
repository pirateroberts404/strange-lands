import React from 'react'
import styled from 'styled-components'
import { FullWindow } from './../../components'
import { H2 } from './../../styles/components'
import { flexCenteredAll } from './../../styles/mixins'

export default props =>
	<FullWindow position={`relative`} zindex={100}>
		<Intro>
			<H2>{props.introCopy}</H2>
		</Intro>
	</FullWindow>

const Intro = styled.article`
	${flexCenteredAll};
	width: 100%;
	height: 100%;
	padding: 5%;
	h2 {
		width: 100%;
		max-width: 76rem;
		margin: auto;
	}
`