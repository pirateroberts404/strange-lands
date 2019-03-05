import React from 'react'
import styled from 'styled-components'
import { pageData, Head } from './../components'
import { trimExcerpt } from './../scripts'
import Strain from './home/Strain'

export default pageData(props =>
	<ProductSection>
		<Head title={`Strains ~ ${props.strain_name}`} description={trimExcerpt(props.strain_copy)} />
		<div className={`strain-content`}>
			<Strain data={props}/>
		</div>
	</ProductSection>
)

const ProductSection = styled.section`
	width: 100vw;
	min-height: 100vh;
	margin: auto;
	.strain-content {
		margin-top: 12rem;
		position: relative;
		z-index: 10;
	}
`