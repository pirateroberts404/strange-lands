import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { ageVerification } from './../state/actions'
import { flexColumn, buttonInit, flexRow, animationFadeIn, flexCenteredAll, smallType, fixedTopLeft } from './../styles/mixins'
import { H1 } from './../styles/components'
import { spacing, shared } from './../styles/theme'
import FitImage from './utils/FitImage'
import FullWindow from './FullWindow'

const AgeVerification = props => 
  <FullWindow>
    <VerificationWrapper>
      {(props.apiData && props.fonts) &&
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
      <FullBg>
        <FitImage src={`/assets/placeholder/age-gradient.svg`} contain={`cover`} />
      </FullBg>
    </VerificationWrapper>
  </FullWindow>

export default connect(
  state => ({
    apiData: state.apiData,
    fonts: state.fontsLoaded,
  }),
  dispatch => ({
    set_verification: (bool) => dispatch(ageVerification(bool))
  })
)(AgeVerification)

// STYLES
const VerificationWrapper = styled.section`
  ${animationFadeIn(2500, 500)};
  ${flexCenteredAll};
  ${fixedTopLeft};
  z-index: 100;
  overflow: hidden;
  justify-content: center;
`

const FullBg = styled.aside`
  ${animationFadeIn(1750, 0)};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  mask: url('/assets/placeholder/age-gradient.svg');
  mask-size: cover;
  z-index: 0;
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
  z-index: 10;
  position: relative;
  h1 {
    margin-bottom: ${spacing.double_pad};
  }
`
