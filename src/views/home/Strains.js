import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { H3 } from '../../styles/components'
import { flexColumn, flexColumnCentered, bodyType } from '../../styles/mixins'
import { spacing } from '../../styles/theme'
import { FitImage } from '../../components'

const Strain = props =>
	<StrainWrapper>
		<div className={`strain-inner`}>
			<div className={`strain-copy`}>
				<div className={`copy-block`}>
					<H3>{props.data.strain_name}</H3>
					<div className={`description`} dangerouslySetInnerHTML={{ __html: props.data.strain_copy }}/>
				</div>
			</div>
			<div className={`strain-image`}>
				<div className={`image`}>
					<FitImage src={props.data.strain_image} fit={`contain`}/>
				</div>
			</div>
		</div>
	</StrainWrapper>

const Strains = props =>
	<StrainsList>
		{props.apiData && props.apiData.strains.map((item, i) =>
			<Strain key={`strain-${i}`} data={item} />
		)}
	</StrainsList>

export default connect(
	state => ({
		apiData: state.apiData
	})
)(Strains)


const StrainsList = styled.section`
  ${flexColumn};
  width: 100%;
  position: relative;
  z-index: 100;
`

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
	}
	.description {
		width: 100%;
		max-width: 44rem;
		* {
			${bodyType};
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