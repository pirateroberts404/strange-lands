import React from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'
import { flexColumn, fancyScroll } from './styles/mixins'
import { AgeVerification, Logo } from './components'
import { colors } from './styles/theme'

const Document = props =>
  <React.Fragment>
    <GlobalStyles />
    <Logo />
    <AgeVerification />
    <Transition
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {props.apiData && (styles =>
        <Main style={styles} height={`${props.wh}px`} overflow={'scroll'}>
          {props.children}
        </Main>
      )}
    </Transition>
  </React.Fragment>

export default connect(
  state => ({
    apiData: state.apiData,
    age: state.verificationState,
    wh: state.resizeState.window_height,
  })
)(Document)

// MAIN STYLING
const Main = styled.main`
  ${flexColumn};
  ${fancyScroll};
  width: 100%;
  height: ${props => props.height};
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${props => props.zindex || 100};
  overflow-x: hidden;
  overflow-y: ${props => props.overflow || 'hidden'};
  -webkit-overflow-scrolling: touch;
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
