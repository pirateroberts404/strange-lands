import React from 'react'
import { canvasBlob } from './../../canvas'
import styled from 'styled-components'

export default class extends React.Component {
	render() {
		return (
			<TopSection>
				{this.props.children}
			</TopSection>
		)
	}
}

const TopSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`
