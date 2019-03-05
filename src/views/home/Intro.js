import React from 'react'
import styled from 'styled-components'
import { H2 } from './../../styles/components'
import { flexCenteredAll } from './../../styles/mixins'
import { spacing } from './../../styles/theme'

export default props =>
	<IntroWrapper>
		<Intro>
			<H2>{props.introCopy}</H2>
		</Intro>
	</IntroWrapper>

const IntroWrapper = styled.div`
	position: relative;
	margin: 0 auto;
	padding: calc(${spacing.big_pad} * 5) ${spacing.single_pad};
	min-height: 60rem;
	${flexCenteredAll};
`

const Intro = styled.article`
	h2 {
		width: 100%;
		max-width: 76rem;
		margin: auto;
	}
`