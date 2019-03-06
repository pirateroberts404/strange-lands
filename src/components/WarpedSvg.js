import React from 'react'
import styled from 'styled-components'
import { absoluteCentered } from './../styles/mixins'
import Warp from 'warpjs'

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.warpRef = React.createRef()
	}

	componentWillMount() {
		setTimeout(() => {
			const speed = parseInt(this.props.svg.animation.speed) || 0.05
			const waves = parseInt(this.props.svg.animation.waves) || 16
			const interpolation = parseInt(this.props.svg.animation.interpolation) || 4
			const vert = parseInt(this.props.svg.animation.vert) || 10

			console.log(speed, waves, interpolation, vert)

			const svg = this.warpRef.current.children[0]
			const warp = new Warp(svg)
			warp.interpolate(interpolation)
			warp.transform(([x, y]) => [x, y, y])
			let offset = 0;
			const animate = () => {
				warp.transform(([x, y, oy]) => [x, oy + vert * Math.sin(x / waves + offset), oy])
				offset += speed
				requestAnimationFrame(animate)
			}
			animate()
		}, 1)
	}

	render() {
		return (
			<SvgWrapper
				ref={this.warpRef}
				dangerouslySetInnerHTML={{ __html: this.props.svg.svg_code }}
				top={this.props.svg.position.top}
				right={this.props.svg.position.right}
				bottom={this.props.svg.position.bottom}
				left={this.props.svg.position.left}
				width={this.props.svg.position.width}
				height={this.props.svg.position.height}
				z_index={parseInt(this.props.svg.position.z_index)}
			/>
		)
	}
}

const SvgWrapper = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
	top: ${props => (props.top !== "") ? props.top : 'unset'};
	right: ${props => (props.right !== "") ? props.right : 'unset'};
	bottom: ${props => (props.bottom !== "") ? props.bottom : 'unset'};
	left: ${props => (props.left !== "") ? props.left : 'unset'};
	z-index: ${props => props.z_index || 0};
	position: absolute;
	overflow: visible;
	svg {
		${absoluteCentered};
		width: 100%;
		height: 100%;
		object-fit: contain;
		overflow: visible;
	}
`