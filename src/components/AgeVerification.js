import React from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import Cookies from 'universal-cookie'
import styled from 'styled-components'
import { ageVerification } from './../state/actions'
import { flexColumn, buttonInit, flexRow, animationFadeIn, flexCenteredAll, smallType, fixedTopLeft } from './../styles/mixins'
import { H1, Modal } from './../styles/components'
import { spacing, shared, colors } from './../styles/theme'
import FitImage from './utils/FitImage'
import FullWindow from './FullWindow'
import Portal from './Portal'

const cookies = new Cookies()
let verified_cookie = cookies.get('age_verified')
let show_ageGate = true

if (verified_cookie) {
  show_ageGate = false
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
        from={{ opacity: 0, transform: `matrix3d(1.25, 0.02, 0.00, 0.0005, 0.02, 1.15, 0.00,0.0001, 0, 0, 1, 0, 0, 0, 10, 1)` }}
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
                    <FitImage src={`/assets/placeholder/age-gradient.svg`} contain={`cover`} />
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
