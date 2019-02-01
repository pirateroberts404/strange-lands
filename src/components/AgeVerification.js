import React from 'react'
import styled from 'styled-components'
import { flexRowCenteredAll, flexColumn, buttonInit, sansFont, flexRow, bigType, animationFadeIn, media, fixedTopLeft } from './../styles/mixins'
import { colors } from './../styles/theme'
import FitImage from './utils/FitImage'
import FullWindow from './FullWindow'
import Logo from './Logo'

export default props =>
  <FullWindow>
    <VerificationWrapper>
      <LogoPosition>
        <Logo/>
      </LogoPosition>
      <AgeMessage>
        <Age>
          <span>Message</span>
        </Age>
        <ButtonWrapper>
          <AgeButton onClick={props.ClickFunction}>yes</AgeButton>
          <AgeButton>no</AgeButton>
        </ButtonWrapper>
      </AgeMessage>
    </VerificationWrapper>
  </FullWindow>

// STYLES
const LogoPosition = styled.div`
  display: block;
  position: fixed;
  z-index: 9000;
  width: 10rem;
  top: 2rem;
  right: 2rem;
  ${media.desktopNav`
    width: 18rem;
  `}
`

const VerificationWrapper = styled.section`
  ${animationFadeIn(2500, 500)};  
  ${flexColumn};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow: hidden;
  justify-content: center;
  padding-bottom: 12rem;
  ${media.desktopNav`
    padding-bottom: 0;
    ${flexRowCenteredAll};
  `}
`

const ButtonWrapper = styled.div`
  ${flexRow};  
  z-index: 100;
  width: 100%;
  margin-top: 1rem;
  ${media.desktopNav`
    justify-content: flex-end;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding-right: 4vmin;
    height: 100%;
    width: 50vw;
    overflow: visible;
  `}
`

const AgeButton = styled.button`
  ${buttonInit};
  ${sansFont};
  line-height: .8;
  font-size: 15vmin;
  color: ${colors.white};
  transition: color 350ms ease;
  will-change: color;
  z-index: 1;
  padding: 0;
  margin: 0;
  margin-right: 4vmin;
  &:hover {
    color: ${colors.pink};
    z-index: 100;
  }
  &:last-child {
    margin-right: 0;
    &:hover {
      color: ${colors.mint};
    }
  }
`

const AgeMessage = styled.div`
  ${bigType};
  ${flexColumn};
  color: ${colors.lt_blue};
  position: relative;
  left: 0;
  z-index: 1;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 6px;
  ${media.desktopNav`  
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    pointer-events: none;
    line-height: .8;
    justify-content: center;
    padding-left: 4vmin;
    padding-bottom: 5vmin;
  `}
`

const Age = styled.div`
  ${flexColumn};
`
