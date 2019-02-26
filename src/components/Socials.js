import React from 'react'
import styled from 'styled-components'
import { colors } from './../styles/theme'
import { buttonInit, flexRow } from '../styles/mixins'

export default props => {
	return (
		<SocialLinks>
			<button><span>Like Us on Facebook</span></button>
			<button><span>Follow Us on Twitter</span></button>
		</SocialLinks>
	)
}

const SocialLinks = styled.menu`
	${flexRow};
	width: 100%;
	margin: auto;
	border: 1px solid ${colors.map_blue};
	button {
		${buttonInit};
		text-align: left;
		padding: 2.2rem 3.5rem 2rem;
		width: 100%;
		border-right: 1px solid ${colors.map_blue};
		span {
			line-height: .8;
		}
		&:last-child {
			border-right: 0;
		}
	}
`
