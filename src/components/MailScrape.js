import React from 'react'
import styled from 'styled-components'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { connect } from 'react-redux'
import { H5 } from './../styles/components'
import { buttonInit, media, smallType, sansFont } from './../styles/mixins'
import { fonts, colors, spacing } from './../styles/theme'
import ResponsiveWrapper from './ResponsiveWrapper'

class MailScrape extends React.Component {

  constructor (props) {
    super(props)
    this.input
    this.onSubmitted
    this.submitted = false
    this.returnHandler = this.returnHandler.bind(this)
    this.submit = this.submit.bind(this)
  }
  
  
  submit = onSubmitted => {
    this.submitted = true
    this.input &&
    this.input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: this.input.value
    });
  }

  returnHandler = e => {
    if (e.keyCode === 13 && !this.submitted) {
      console.log(e)
      this.submit(this.onSubmitted)
    }
  }
  
  componentWillMount() {
    document.addEventListener('keydown', this.returnHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.returnHandler);
  }
  
  render() {
    const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
      this.onSubmitted = onSubmitted
      return (
        <div className={className} style={style}>
          <div className="input-wrapper">
            <input ref={node => (this.input = node)} type="email" placeholder="Enter your Email" />
            <button onClick={() => this.submit(this.onSubmitted)}><span>SIGN UP</span></button>
          </div>
          {status === "sending" && <div className="message">sending...</div>}
          {status === "error" && (
            <div className="message" dangerouslySetInnerHTML={{ __html: message }} />
          )}
          {status === "success" && (
            <div className="message" dangerouslySetInnerHTML={{ __html: message }} />
          )}
        </div>
      );
    };

    return (
      <MailingContainer>
        {(this.props.apiData) &&
          <React.Fragment>
            <Cta>
              <ResponsiveWrapper
                desktop={<H5 dangerouslySetInnerHTML={{ __html: this.props.apiData.options.newsletter_cta }} />}
                mobile={<H5 dangerouslySetInnerHTML={{ __html: this.props.apiData.options.newsletter_cta }} />}
              />
            </Cta>
            <MailchimpSubscribe
              url={this.props.apiData.options.mailchimp_url}
              render={({ subscribe, status, message }) => (
                <SimpleForm
                  status={status}
                  message={message}
                  onSubmitted={formData => subscribe(formData)}
                  className={'form-wrapper'}
                />
              )}
            />
          </React.Fragment>
        }
      </MailingContainer>
    )
  }
}

export default connect(
  state => ({
    apiData: state.apiData,
  })
)(MailScrape)

// STYLES
const Cta = styled.div`
  width: 100%;
  max-width: 40rem;
  position: relative;
  margin: 0 auto calc(${spacing.big_pad} * 2.5);
`

const MailingContainer = styled.div`
  width: 100%;
  margin-bottom: ${spacing.double_pad};
  position: relative;
  ${media.desktopNav`
    padding: ${spacing.double_pad} 0;
    margin-bottom: 0;
  `}
  p {
    padding-bottom: ${spacing.single_pad};
    ${media.desktopNav`
      padding-bottom: 0;
    `}
  }
  a {
    color: ${colors.white};
  }
  .message {
    ${smallType};
    color: ${colors.white};
    width: 100%;
    line-height: 1.2;
    position: relative;
    padding-top: ${spacing.single_pad};
    ${media.desktopNav`
      padding-top: 0;
      position: absolute;
      top: 7rem;
    `}
  }
  .form-wrapper {
    position: relative;
  }
  .input-wrapper {
    width: 100%;
    flex-direction: row;
    display: flex;
  }
  input[type=email] {
    ${buttonInit};
    ${sansFont};
    width: 100%;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid ${colors.map_blue};
    font-size: 3rem;
    min-height: 4.5rem;
    padding: .5rem 1.5rem;
    font-weight: bold;
    margin: 0;
    margin-right: 1rem;
    color: ${colors.white};
    &:focus {
      outline: none!important;
      box-shadow: 0;
      color: ${colors.white};
    }
    &::-webkit-input-placeholder {
      color: ${colors.white};
      font-family: ${fonts.sans};
    }
    ${media.medium`
      height: 4.5rem;
      font-size: 2rem;
      padding-top: .6rem;
      padding-left: 0;
    `}
  }
  button {
    ${buttonInit};
    -webkit-text-fill-color: ${colors.white}!important;
    margin: 0;
    padding: 0;
    color: white;
    height: 4.5rem;
    width: 100%;
    font-size: 2rem;
    background-color: ${colors.grey_blue};
    color: ${colors.white}!important;
    flex-shrink: 0;
    &:hover {
      background-color: ${colors.map_blue};
    }
    ${media.medium`
      height: 4.5rem;
      width: 25rem;
      &:hover {
        background-color: ${colors.pink};
        color: ${colors.lt_blue};
      }
    `}
  }
`
