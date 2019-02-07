import React from 'react'
import styled from 'styled-components'
import { Head, optionsData, FullWindow } from './../components'
import { H1 } from './../styles/components'
import { flexCenteredAll, fullWindow, animationFadeIn, textShadow, flexColumn } from './../styles/mixins'
import HeroBg from './home/HeroBg'
import Intro from './home/Intro'
import Strain from './home/Strain'

export default optionsData(props =>
  <React.Fragment>
    <Head title={`Home`} />
    <FullWindow position={`relative`}>
      <Centered>
        <Headline dangerouslySetInnerHTML={{ __html: props.hero_cta }} />
      </Centered>
      <HeroBg image={`/assets/placeholder/home-bg.svg`} />
    </FullWindow>
    <ContentWrap>
      <Intro introCopy={props.intro_text}/>
      <Strains>
        {props.strains_list.map((item, i) =>  
          <Strain key={`strain-${i}`} data={item}/>
        )}
      </Strains>
      <HeroBg image={`/assets/placeholder/background-strains.svg`} />
    </ContentWrap>
  </React.Fragment>
)

const Centered = styled.div`
  ${animationFadeIn(2000, 1000)};
  ${fullWindow};
  ${flexCenteredAll};
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
`

const ContentWrap = styled.div`
  width: 100%;
  position: relative;
`

const Strains = styled.section`
  ${flexColumn};
  width: 100%;
  position: relative;
  z-index: 100;
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