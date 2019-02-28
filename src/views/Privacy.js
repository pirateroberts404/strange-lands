import React from 'react'
import styled from 'styled-components'
import { Head, optionsData, FullWindow } from './../components'
import { media, smallType, flexColumn, textShadow } from './../styles/mixins'
import { StyledMarkup } from './../styles/components'
import { spacing } from './../styles/theme'
import HeroBg from './home/HeroBg'

export default optionsData(props =>
	<React.Fragment>
		<Head title={`Privacy Policy`} />
		<PrivacySection>
			<StyledMarkup dangerouslySetInnerHTML={{ __html: props.privacy_policy }} />
		</PrivacySection>
		<FullWindow zIndex={1}>
			<HeroBg image={`/assets/placeholder/home-bg.svg`} />
		</FullWindow>
	</React.Fragment>
)

const PrivacySection = styled.section`
	${flexColumn};
	margin: 12rem auto ${spacing.big_pad};
	position: relative;
	z-index: 10;
	${media.desktopNav`
    padding-top: 8rem;
    padding-bottom: 8rem;
  `}
	&:last-child {
		padding-top: 0;
	}
	* {
		color: #fff;
		${textShadow(`15`, `rgba(0,0,0,0.125)`)};
	}
	ol {
		list-style-type: upper-roman;
	}
	ul {
		padding-left: 2rem;
		list-style-type: circle;
		padding-bottom: 2rem;
	}
	h1 {
		text-align: left;
		margin-bottom: ${spacing.big_pad};
		max-width: 36rem;
	}
	p,
	li {
		${smallType};
	}
	p,
	li {
		b {
			${smallType};
		}
	}
	h2 {
		${smallType};
	}
`