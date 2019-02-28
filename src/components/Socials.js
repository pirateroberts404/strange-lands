import React from 'react'
import styled from 'styled-components'
import { colors } from './../styles/theme'
import { buttonInit, flexRow, flexRowCenteredVert, hoverPurple } from '../styles/mixins'

export default props => {
	console.log(props)
	return (
		<SocialLinks>
			{props.social_links.map((item, i) =>
				<a href={item.social_url} key={`social-${i}`}>
					<Icon icon_url={item.icon}/>
					<span>{item.cta}</span>
				</a>
			)}
		</SocialLinks>
	)
}

const SocialLinks = styled.menu`
	${flexRow};
	width: 100%;
	margin: auto;
	border: 1px solid ${colors.map_blue};
	a {
		${buttonInit};
		${flexRowCenteredVert};
		height: 6rem;
		text-transform: uppercase;
		text-decoration: none;
		text-align: left;
		padding: 0 2rem 0;
		width: 100%;
		border-right: 1px solid ${colors.map_blue};
		background-color: ${colors.black};
		${hoverPurple};
		span {
			line-height: 1.5;
			display: inline-block;
			padding-top: .3rem;
		}
		&:last-child {
			border-right: 0;
		}
	}
`

const Icon = styled.span`
	width: 2rem;
	height: 2rem;
	background-image: url(${props => props.icon_url});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	display: inline-block;
	position: relative;
	margin-right: 1.5rem;
`
