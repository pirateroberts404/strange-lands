import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { ageVerification } from './../state/actions'
import { flexColumn, buttonInit, flexRow, animationFadeIn, media, flexCenteredAll, smallType, gradient, fixedTopLeft } from './../styles/mixins'
import { H1 } from './../styles/components'
import { spacing, shared } from './../styles/theme'
import FitImage from './utils/FitImage'
import FullWindow from './FullWindow'
import Logo from './Logo'

const AgeVerification = props => {
  console.log(props)
  return (
    <FullWindow>
      <VerificationWrapper>
        <LogoPosition>
          <Logo/>
        </LogoPosition>
        {props.apiData &&
          <AgeCta>
            <H1 dangerouslySetInnerHTML={{ __html: props.apiData.options.age_verification_cta }} />
            <ButtonWrapper>
              <AgeButton onClick={() => props.set_verification(false)}>
                <span>yes</span>
              </AgeButton>
              <AgeButton>
                <span>no</span>
              </AgeButton>
            </ButtonWrapper>
          </AgeCta>
        }
      </VerificationWrapper>
      <VerificationBg>
        <FitImage src={`/assets/placeholder/age-gradient.svg`} contain={`cover`}/>
      </VerificationBg>
    </FullWindow>
  )
}

export default connect(
  state => ({
    apiData: state.apiData,
  }),
  dispatch => ({
    set_verification: (bool) => dispatch(ageVerification(bool))
  })
)(AgeVerification)

// STYLES
const LogoPosition = styled.div`
  display: block;
  position: fixed;
  z-index: 9000;
  width: 8rem;
  top: ${spacing.single_pad};
  left: ${spacing.single_pad};
  ${media.desktopNav`
    width: 14rem;
  `}
`

const VerificationWrapper = styled.section`
  ${animationFadeIn(2500, 250)};
  ${flexCenteredAll};
  ${fixedTopLeft};
  z-index: 100;
  overflow: hidden;
  justify-content: center;
`

const VerificationBg = styled.aside`
  ${animationFadeIn(1750, 350)};
  ${fixedTopLeft};
  mask: url('/assets/placeholder/age-gradient.svg');
  mask-size: cover;
  &:before {
    filter: url(#noise);
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`

const ButtonWrapper = styled.div`
  ${flexRow};
  z-index: 100;
  margin: auto;
  position: relative;
`

const AgeButton = styled.button`
  ${buttonInit};
  ${smallType};
  line-height: 1.25;
  transition: color 350ms ease;
  will-change: color;
  z-index: 1;
  padding: 0;
  margin: 0;
  padding: .5rem 7rem .75rem;
  position: relative;
  &:first-child {
    margin-right: 5rem;
  }
  span {
    position: relative;
    z-index: 10;
  }
  &:hover {
    &:before {
      opacity: .25;
    }
  }
  &:before,
  &:after {
    transition: opacity 350ms ease-in-out;
    will-change: opacity;
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:before {
    z-index: 10;
    border: ${shared.border_thin};
    opacity: 1;
  }
`

const AgeCta = styled.div`
  ${flexColumn};
  position: relative;
  h1 {
    margin-bottom: ${spacing.double_pad};
  }
`
