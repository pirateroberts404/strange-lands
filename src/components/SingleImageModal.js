import React from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { animationFadeIn, buttonInit, media } from './../styles/mixins'
import { P, Modal, ModalContent } from './../styles/components'
import { colors, spacing } from './../styles/theme'
import Portal from './Portal'
import FitImage from './utils/FitImage'
import Close from './utils/Close'
import ResponsiveWrapper from './ResponsiveWrapper'

class SingleImageModal extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        modal: false
      }
      this._ImageEnlarge = this._ImageEnlarge.bind(this)
    }
  
    _ImageEnlarge() {
      this.setState({
        modal: !this.state.modal
      })
    }

    render() {
      return (
        <React.Fragment>
          <Popper onClick={() => this._ImageEnlarge()}>
            <FitImage src={this.props.src}/>
          </Popper>
          <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
            {this.state.modal && (styles => 
              <Portal>
                <Modal BgColor={colors.blue} style={styles} height={this.props.wh}>
                  <ResponsiveWrapper
                    desktop={ <Close clickFunction={() => this._ImageEnlarge()} color={colors.pink}/> }
                    mobile={ <Close color={colors.pink} clickFunction={() => this._ImageEnlarge()} size={`36px`} position={`1.25rem`}/> }
                  />
                  <ModalContent>
                    <ModalImageWrapper>
                      <FitImage src={this.props.src} fit={'contain'}/>
                    </ModalImageWrapper>
                    <CaptionWrapper>
                      <P>{this.props.title}</P>
                    </CaptionWrapper>
                  </ModalContent>
                </Modal>
              </Portal>
            )}
          </Transition>
        </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    wh: state.resizeState.window_height,
  })
)(SingleImageModal)

// STYLES
const Popper = styled.button`
  ${buttonInit};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  img {
    opacity: 1;
    transition: opacity 250ms ease;
    will-change: opacity;
  }
  &:hover {
    img { opacity: .5; }
  }
`

const ModalImageWrapper = styled.div`
  ${animationFadeIn(750, 150)};
  width: 100%;
  flex: 1;
  height: 100%;
  display: block;
  position: relative;
  padding: ${spacing.single_pad};
  max-width: 140rem;
  max-height: 65rem;
  img {
    margin-bottom: -2px;
  }
  ${media.desktopNav`
    width: 50%;
    padding: ${spacing.double_pad};
  `}
`

const CaptionWrapper = styled.div`
  ${animationFadeIn(750, 350)};
  width: 100%;
  padding: ${spacing.single_pad};
  ${media.desktopNav`
    width: 50%;
    padding: ${spacing.double_pad};
  `}
`
