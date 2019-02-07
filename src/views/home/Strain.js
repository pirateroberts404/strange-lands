import React from 'react'
import styled from 'styled-components'
import { H3, P } from './../../styles/components'
import { flexRowCenteredVert, flexColumnCentered } from './../../styles/mixins'
import { shared, spacing } from './../../styles/theme'
import { FitImage } from './../../components'

export default props =>
	<StrainWrapper>
		<div className={`strain-inner`}>
			<div className={`strain-copy`}>
				<div className={`copy-block`}>
					<H3>{props.data.strain_name}</H3>
					<P>{props.data.strain_copy}</P>
				</div>
			</div>
			<div className={`strain-image`}>
				<div className={`image`}>
					<FitImage src={props.data.strain_image} fit={`contain`}/>
				</div>
			</div>
		</div>
	</StrainWrapper>

const StrainWrapper = styled.article`
	width: 100%;
	height: 75rem;
	&:nth-child(even) {
		.strain-inner { flex-direction: row-reverse; }
	}
	&:nth-child(odd) {
		.strain-inner { flex-direction: row; }
	}
	.strain-inner {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		padding: ${spacing.double_pad} 0;
		position: relative;
		margin: 0 auto;
		p {
			width: 100%;
			max-width: 44rem;
		}
	}
	.strain-image,
	.strain-copy {
		width: 50%;
		position: relative;
	}
	.strain-copy {
		${flexColumnCentered};
	}
	.strain-image {
		height: 100%;
		.image {
			margin: auto;
			position: relative;
			max-width: 40rem;
			width: 100%;
			height: 100%;
		}
	}
`