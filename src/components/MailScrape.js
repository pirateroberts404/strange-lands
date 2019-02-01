import React from 'react'
import styled from 'styled-components'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { connect } from 'react-redux'
import { P, SmallP } from './../styles/components'
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
            <input ref={node => (this.input = node)} type="email" placeholder="email" />
            <button onClick={() => this.submit(this.onSubmitted)}></button>
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
            <ResponsiveWrapper
              desktop={<P dangerouslySetInnerHTML={{ __html: this.props.apiData.options.enews_cta }} />}
              mobile={<SmallP dangerouslySetInnerHTML={{ __html: this.props.apiData.options.enews_cta }} />}
            />
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
const MailingContainer = styled.div`
  width: 100%;
  margin-bottom: ${spacing.double_pad};
  position: relative;
  ${media.desktopNav`
    padding: ${spacing.double_pad};
    min-width: 60rem!important;
    margin-bottom: 4rem;
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
      top: 7.25rem;
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
    background-color: ${colors.lt_blue};
    font-size: 3rem;
    min-height: 5rem;
    padding: .5rem 1.5rem;
    font-weight: bold;
    margin: 0;
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
      height: 5rem;
      font-size: 4rem;
      padding-top: .6rem;
      padding-left: 1.2rem;
    `}
  }
  button {
    ${buttonInit};
    margin: 0;
    padding: 0;
    color: white;
    width: auto;
    height: 5rem;
    width: 5rem;
    font-size: 2rem;
    background-color: ${colors.lt_blue};
    background-image: url('assets/kiss-emoji.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
    border-left: 1px solid ${colors.blue};
    color: ${colors.white}!important;
    -webkit-text-fill-color: ${colors.white}!important;
    flex-shrink: 0;
    &:hover {
      background-color: ${colors.lt_blue};
    }
    ${media.medium`
      height: 5rem;
      width: 5rem;
      &:hover {
        background-color: ${colors.pink};
        color: ${colors.lt_blue};
      }
    `}
  }
`
