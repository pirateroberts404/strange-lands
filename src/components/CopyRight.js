import React from 'react'
import styled from 'styled-components'
import { mouseType } from '../styles/mixins'
import { colors } from '../styles/theme'

const year = new Date();

export default () =>
	<CrP>&copy; {`${year.getFullYear()} Strange Lands`}</CrP>

const CrP = styled.p`
	${mouseType};
  color: ${colors.white};
`