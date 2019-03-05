import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { H3 } from '../../styles/components'
import { flexColumnCentered, bodyType, opacityTransition } from '../../styles/mixins'
import { spacing } from '../../styles/theme'
import { FitImage } from '../../components'
import Warp from 'warpjs'

class StrainSvg extends React.Component {
	constructor(props) {
		super(props);
		this.warpRef = React.createRef()
	}
	
	
	componentWillMount() {
		setTimeout(() => {
			console.log(this.warpRef.current)
		}, 1)
	}
	
	render() {
		return (
			<SvgWrapper ref={this.warpRef} dangerouslySetInnerHTML={{ __html: this.props.svg }}/>
		)
	}
}

const SvgWrapper = styled.div`
	width: 40rem;
	height: 40rem;
	position: absolute;
	top: 0;
	left: 0;
	svg {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`

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
					<Link to={`/strain/${this.props.data.slug}`} className={`strain-copy`}>
						<div className={`copy-block`}>
							<H3><span>{this.props.data.strain_name}</span></H3>
							<div className={`description`} dangerouslySetInnerHTML={{ __html: this.props.data.strain_copy }} />
						</div>
					</Link>
					<div className={`strain-image`}>
						<div className={`image`}>
							<FitImage src={this.props.data.strain_image} fit={`contain`} />
						</div>
						{this.props.data.blue_svg && <StrainSvg svg={this.props.data.blue_svg} />}
					</div>
				</div>
			</StrainWrapper>
		)
	}
}

export default Strain

const StrainWrapper = styled.article`
	width: 100%;
	height: 55rem;
	max-width: 114rem;
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
		text-decoration: none;
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