import React from 'react'
import { Transition } from 'react-spring'
import { connect } from 'react-redux'
import { colors } from './../styles/theme'
import { ModalContent, Modal, ModalContentWrapper } from './../styles/components'
import Portal from './Portal'
import Close from './utils/Close'
import MailScrape from './MailScrape'
import NewsletterButton from './NewsletterButton'

class NewsletterModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this._Popup = this._Popup.bind(this)
  }
  
  _Popup() {
    console.log('pop')
    this.setState({
      modal: !this.state.modal
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <NewsletterButton clickFunction={() => this._Popup()}/>
        <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
          {this.state.modal && (styles => 
            <Portal>
              <Modal BgColor={`#11069fd9`} style={styles} height={this.props.wh}>
                <ModalContent>
                  <Close color={colors.pink} clickFunction={() => this._Popup()} />
                  <ModalContentWrapper>
                    <MailScrape/>
                  </ModalContentWrapper>
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
)(NewsletterModal)