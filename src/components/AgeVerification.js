import React from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import Cookies from 'universal-cookie'
import styled from 'styled-components'
import { ageVerification } from './../state/actions'
import { flexColumn, buttonInit, flexRow, animationFadeIn, flexCenteredAll, smallType, fixedTopLeft } from './../styles/mixins'
import { H1, Modal } from './../styles/components'
import { spacing, shared, colors } from './../styles/theme'
import WarpedSvg from './WarpedSvg'
import FullWindow from './FullWindow'
import Portal from './Portal'

const cookies = new Cookies()
let verified_cookie = cookies.get('age_verified')
let show_ageGate = true

if (verified_cookie) {
  show_ageGate = false
}

const landing_svg = {
  label: "Landing Blob",
  svg_code: `
    <svg width="1024" height="1024" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" preserveAspectRatio="none">
      <defs>
        <radialGradient cx="3.87638764%" cy="82.7931894%" fx="3.87638764%" fy="82.7931894%" r="109.258898%" id="radialGradient-1">
          <stop stop-color="#3023AE" offset="0%"></stop>
          <stop stop-color="#E52ADF" offset="54.9641082%"></stop>
          <stop stop-color="#F59223" offset="100%"></stop>
        </radialGradient>
      </defs>
      <g fill="url(#radialGradient-1)">
        <path d="M385.775232,0 L1024,0 L1024,895.650759 C983.04034,890.179603 943.196329,878.347647 906.273053,860.09189 C605.769326,711.511452 405.090702,784.627216 304.339339,972.063382 C294.972866,989.488612 286.889321,1006.85306 279.698526,1024 L0,1024 L0,388.846285 C29.4493862,375.06607 57.4650281,362.022323 82.7857782,349.07132 C243.233328,267.009274 341.648604,124.985358 373.836189,33.4595908 C377.765697,22.2882098 381.725795,11.122088 385.775242,-2.68107291e-05 Z" id="Combined-Shape"></path>
      </g>
    </svg>
  `,
  position: {
    top: "-7vh",
    right: "",
    bottom: "",
    left: "-7vw",
    width: "114vw",
    height: "114vh",
    z_index: "90"
  },
  animation: {
    speed: "0.05",
    waves: "150",
    interpolation: "50",
    vertical_warp: "20"
  }
}

class AgeVerification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: show_ageGate
    };
    this._ageGateResponse = this._ageGateResponse.bind(this)
  }

  _ageGateResponse(answer) {
    if (answer == 'yes') {
      cookies.set('age_verified', true, { path: '/' })
      this.props.set_verification(true)
      this.setState({
        visible: false
      })
    }
  }
  
  componentWillMount() {
    if (!show_ageGate) {
      this.props.set_verification(true)
    }
  }

  render() {
    return (
      <Transition
        from={{ opacity: 0}}
        enter={{ opacity: 1, transform: `transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)` }}
        leave={{ opacity: 0, transform: `matrix3d(1.45, 0.02, 0.00, 0.0005, 0.025, 1.45,0.00,0.0001,0,0,1,0,0,0,10,1)`, pointerEvents: 'none' }}
      >
        {this.state.visible && (styles =>
          <Portal>
            <Modal BgColor={colors.black} style={styles} height={this.props.wh}>
              <FullWindow>
                <VerificationWrapper>
                  {(this.props.apiData && this.props.fonts) &&
                    <AgeCta>
                      <H1 dangerouslySetInnerHTML={{ __html: this.props.apiData.options.age_verification_cta }} />
                      <ButtonWrapper>
                        <AgeButton onClick={() => this._ageGateResponse('yes')}>
                          <span>yes</span>
                        </AgeButton>
                        <AgeButton onClick={() => this._ageGateResponse('no')}>
                          <span>no</span>
                        </AgeButton>
                      </ButtonWrapper>
                    </AgeCta>
                  }
                  <FullBg>
                    <WarpedSvg svg={landing_svg} fit={'cover'}/>
                  </FullBg>
                </VerificationWrapper>
              </FullWindow>
            </Modal>
          </Portal>
        )}
      </Transition>
    )
  }
}

export default connect(
  state => ({
    apiData: state.apiData,
    fonts: state.fontsLoaded,
    wh: state.resizeState.window_height,
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
  z-index: 0;
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
