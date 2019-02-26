import React from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'
import { H3 } from '../../styles/components'
import { flexColumnCentered, bodyType, opacityTransition } from '../../styles/mixins'
import { spacing } from '../../styles/theme'
import { FitImage } from '../../components'

class Strain extends React.Component {
	constructor (props) {
		super(props)
		this._handleEnter = this._handleEnter.bind(this)
		this._handleLeave = this._handleLeave.bind(this)
	}
	
	_handleEnter() {
		console.log('enter')
	}

	_handleLeave() {
		console.log('enter')
	}

	render() {
		return (
			<StrainWrapper hover_icon={this.props.data.hover_icon}>
				<div className={`strain-inner`}>
					<div className={`strain-copy`}>
						<div className={`copy-block`}>
							<H3><span>{this.props.data.strain_name}</span></H3>
							<div className={`description`} dangerouslySetInnerHTML={{ __html: this.props.data.strain_copy }} />
						</div>
					</div>
					<div className={`strain-image`}>
						<div className={`image`}>
							<FitImage src={this.props.data.strain_image} fit={`contain`} />
						</div>
					</div>
				</div>
			</StrainWrapper>
		)
	}
}

export default Strain

const Wrapper = styled.div`
	width: 100%;
	height: 65rem;
	position: relative;
	display: block;
	margin: auto;
`

const StrainWrapper = styled.article`
	width: 100%;
	height: 65rem;
	position: relative;
	margin: auto;
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
		position: relative;
		&:hover {
			h3 > span:after {
				opacity: 1;
			}
		}
		h3 > span {
			position: relative;
			&:after {
				${opacityTransition};
				content: '';
				opacity: 0;
				width: 6rem;
				height: 6rem;
				position: absolute;
				top: -3.5rem;
				right: -5rem;
				background-image: url(${props => props.hover_icon});
				background-repeat: no-repeat;
				background-position: center;
				background-size: contain;
			}
		}
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