import React from 'react'
import styled from 'styled-components'
import { H3, P } from './../../styles/components'
import { flexCenteredAll, flexColumn } from './../../styles/mixins'
import { shared, spacing } from './../../styles/theme'
import { LocationMap } from './../../components'

export default () =>
	<LocationsSection>
		<LocationWrapper>
			<H3>Locations</H3>
			<LocationMap/>
		</LocationWrapper>
	</LocationsSection>

const LocationsSection = styled.section`
	${flexCenteredAll};
	width: 100%;
	padding: 10%;
	position: relative;
	margin: auto;
	z-index: 1000;
`

const LocationWrapper = styled.div`
	${flexColumn};
	align-items: center;
`