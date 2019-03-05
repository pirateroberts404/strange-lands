import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { flexColumn } from '../../styles/mixins'
import Strain from './Strain'

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
	border-top: 1px solid white;
	border-bottom: 1px solid white;
  width: 100%;
  position: relative;
  z-index: 100;
`
