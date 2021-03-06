import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { H4, P } from '../../styles/components'
import { flexColumn, animationFadeIn, sansFont, hoverPurple } from '../../styles/mixins'
import { shared, spacing, colors } from '../../styles/theme'
import { LocationMap } from '../../components'

const Stockists = props =>
	<StockistsSection>
		<LocationWrapper>
			<HeadlineWrapper>
				<Stroke />
				{props.apiData && <H4>{props.apiData.options.stockists_headline}</H4>}
				<Stroke />
			</HeadlineWrapper>
			{props.apiData && <LocationMap stockists={props.apiData.stockists} />}
			{props.apiData &&
				<LocationBottom>
					<P dangerouslySetInnerHTML={{ __html: props.apiData.options.stockist_cta }}/>
				</LocationBottom>
			}
		</LocationWrapper>
	</StockistsSection>

export default connect(
	state => ({
		apiData: state.apiData,
	})
)(Stockists)

const StockistsSection = styled.section`
	${flexColumn};
	align-items: center;
	width: 100%;
	padding: ${spacing.big_pad} 0;
	position: relative;
	margin: auto;
	z-index: 1000;
`

const LocationWrapper = styled.div`
	${flexColumn};
	align-items: center;
`

const LocationBottom = styled.div`
	text-align: center;
	width: 100%;
	padding-top: ${spacing.big_pad};
	p {
		${sansFont};
		font-size: 2.25rem;
		max-width: 50rem;
		margin: auto;
		a {
			color: ${colors.white};
			font-weight: bold;
			text-decoration: none;
			${hoverPurple};
		}
	}
`

const HeadlineWrapper = styled.div`
	width: 100%;
	margin: 0 auto;
`

const Stroke = styled.div`
	height: 15vh;
	margin: 4rem auto;
	width: 100%;
	position: relative;
	&:before {
		${animationFadeIn(2000, 1500)};
    content: '';
    width: 1px;
    height: 100%;
    background-color: #ffffff;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
	}
`