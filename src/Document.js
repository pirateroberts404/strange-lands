import React from 'react'
import { connect } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import { flexColumn, media } from './styles/mixins'
import { AgeVerification, Logo } from './components'
import { colors, spacing } from './styles/theme'

const Document = props =>
  <React.Fragment>
    <GlobalStyles />
    <LogoPosition>
      <Logo />
    </LogoPosition>
    {props.age && <AgeVerification/>}
    {(props.apiData && !props.age) &&
      <React.Fragment>
        <Main>
          {props.children}
        </Main>
      </React.Fragment>
    }
  </React.Fragment>

export default connect(
  state => ({
    apiData: state.apiData,
    age: state.verificationState,
  })
)(Document)

// MAIN STYLING
const Main = styled.main`
  ${flexColumn};
  width: 100vw;
  position: relative;
`

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

// NORMALIZE CSS
const GlobalStyles = createGlobalStyle`
  html {
    font-size: 58%;
  }
  @media screen and (min-width: 960px) {
    html {
      font-size: 62.5%;
    }
  }
  @media screen and (min-width: 1550px) {
    html {
      font-size: 66.5%;
    }
  }
  @media screen and (min-width: 1750px) {
    html {
      font-size: 68.5%;
    }
  }
  body {
    font-family: arial;
    font-weight: 300;
    font-style: normal;
    text-decoration: none;
  }
  ::-webkit-input-placeholder,
  ::-moz-placeholder {
    color: white;
    font-size: 15vmin;
  }
  *::-webkit-scrollbar {
    width: 2px;
  }
  *::-webkit-scrollbar-track {
    background: ${colors.dk_blue};
  }
  *::-webkit-scrollbar-thumb {
    background: ${colors.pink};
  }
  *::-webkit-scrollbar-thumb:hover {
    background: ${colors.mint};
  }
`
