import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Head, WarpedSvg } from './../components'
import { H1, HeroWrapper } from './../styles/components'
import { flexCenteredAll, animationFadeIn, textShadow } from './../styles/mixins'
import Intro from './home/Intro'
import Strains from './home/Strains'
import Stockists from './home/Stockists'

const Home = props =>
  <React.Fragment>
    {props.apiData &&
      <React.Fragment>
        <Head title={`Home`} description={props.apiData.options.intro_text} />
        <HeroSection>
          <HeroWrapper position={`relative`}>
            <Centered>
              <Headline dangerouslySetInnerHTML={{ __html: props.apiData.options.hero_cta }} />
            </Centered>
            {props.age &&
              <Bg>
                {props.apiData.options.svg_blobs_hero.map((item, i) =>
                  <WarpedSvg svg={item} key={`svg-${item.label}-${i}`} />
                )}
              </Bg>
            }
          </HeroWrapper>
          <Intro introCopy={props.apiData.options.intro_text} />
        </HeroSection>
        {props.age &&
          <React.Fragment>
            <Strains />
            <Stockists />
          </React.Fragment>
        }
      </React.Fragment>
    }
  </React.Fragment>

export default connect(
  state => ({
    apiData: state.apiData,
    age: state.verificationState,
    wh: state.resizeState.window_height,
  })
)(Home)

const HeroSection = styled.section`
  ${animationFadeIn(2000, 500)};
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
	overflow: visible;
`

const Centered = styled.div`
  ${animationFadeIn(2000, 1000)};
  ${flexCenteredAll};
  width: 100%;
  height: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
`

const Headline = styled(H1)`
  ${textShadow(`15`, `rgba(0,0,0,0.125)`)};
  position: relative;
  display: block;
  &:before,
  &:after {
    ${animationFadeIn(2000, 1500)};
    content: '';
    width: 1px;
    height: 15vh;
    background-color: #ffffff;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
  }
  &:before {
    bottom: calc(-15vh - 3rem);
  }
  &:after {
    top: calc(-15vh - 3rem);
  }
` 