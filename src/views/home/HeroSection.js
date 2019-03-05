import React from 'react'
import { canvasBlob } from './../../canvas'
import styled from 'styled-components'

export default class extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			canvasHeight: 0,
			canvasWidth: 0,
			showCanvas: false
		}
		this.wrapperRef = React.createRef()
		this.canvasRef = React.createRef()
	}
	


	componentWillMount() {
		setTimeout(() => {
			this.setState({
				canvasHeight: this.wrapperRef.current.clientHeight,
				canvasWidth: this.wrapperRef.current.clientWidth,
			})
			setTimeout(() => {
				const blob = new canvasBlob(this.canvasRef.current, 640, 780);
				blob.init();
				this.setState({
					showCanvas: true,
				})
			}, 250)
		}, 1)
	}

	render() {
		return (
			<TopSection ref={this.wrapperRef}>
				{this.props.children}
				<Bg>
					<Canvas ref={this.canvasRef} />
					{/*<FitImage src={this.props.image} contain={`contain`} />*/}
				</Bg>
			</TopSection>
		)
	}
}

const Canvas = styled.canvas`
	width: 640px;
	height: 780px;
	position: absolute;
	right: 0;
`

const TopSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Bg = styled.aside`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	overflow-y: visible;
`
