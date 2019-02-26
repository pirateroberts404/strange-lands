import React from 'react'
import styled from 'styled-components'
import { Head, optionsData } from './../components'
import { H1, HeroWrapper } from './../styles/components'
import { flexCenteredAll, animationFadeIn, textShadow } from './../styles/mixins'
import HeroBg from './home/HeroBg'
import Intro from './home/Intro'
import Strains from './home/Strains'
import Stockists from './home/Stockists'

export default optionsData(props =>
  <React.Fragment>
    <Head title={`Home`} description={props.intro_text}/>
    <HeroWrapper position={`relative`}>
      <Centered>
        <Headline dangerouslySetInnerHTML={{ __html: props.hero_cta }} />
      </Centered>
      <HeroBg image={`/assets/placeholder/home-bg.svg`} />
    </HeroWrapper>
    <Intro introCopy={props.intro_text} />
    <Strains />
    <Stockists />
    <HeroBg image={`/assets/placeholder/background-strains.svg`} />
  </React.Fragment>
)

const Centered = styled.div`
  ${animationFadeIn(2000, 1000)};
  ${flexCenteredAll};
  width: 100%;
  height: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
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