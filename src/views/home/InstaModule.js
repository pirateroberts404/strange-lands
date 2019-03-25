import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { H4 } from '../../styles/components'
import { flexColumn, animationFadeIn, sansFont, hoverPurple, flexRowWrap, typeGradient, lineHeight, navType, smallType, bodyType } from '../../styles/mixins'
import { fonts, spacing, colors } from '../../styles/theme'
import { FitImage } from '../../components'

const InstaModule = props =>
  <InstaWrapper>
    <Line />
    {props.apiData &&
      <InstaTop>
        <H4>{props.apiData.options.instagram_cta}</H4>
        <a href={props.apiData.options.instagram_link} target="_blank">
          <span>{props.apiData.options.instagram_handle}</span>
        </a>
      </InstaTop>
    }
    <ul>
      {props.instaData && props.instaData.slice(0, 6).map((item, i) => 
        <li key={`insta-${i}`}>
          <FitImage src={item.thumbnail}/>
        </li>
      )}
    </ul>
  </InstaWrapper>

export default connect(
  state => ({
    instaData: state.instaData,
    apiData: state.apiData,
  })
)(InstaModule)

const Line = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  ${lineHeight};
  &:before {
    bottom: 0;
  }
`

const InstaTop = styled.div`
  width: 100%;
  padding-bottom: ${spacing.double_pad};
  position: relative;
  a {
    ${bodyType};
    font-weight: 600;
    text-decoration: none;
    display: block;
    margin: 0 auto;
    text-align: center;
    padding: ${spacing.double_pad} 0;
    span {
      ${typeGradient};
    }
  }
`

const InstaWrapper = styled.section`
  ${flexColumn};
  width: 100%;
  min-height: calc((100vw / 3) * 2);
  ul {
    ${flexRowWrap};
    width: 100%;
    overflow: hidden;
  }
  li {
    width: calc(100vw / 3);
    height: calc(100vw / 3);
    position: relative;
  }
`