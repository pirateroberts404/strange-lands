import React from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
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
    <Transition 
      from={{ opacity: 0, transform: `matrix3d(1.25, 0.02, 0.00, 0.0005, 0.02, 1.15, 0.00,0.0001, 0, 0, 1, 0, 0, 0, 10, 1)` }}
      enter={{ opacity: 1, transform: `transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)` }}
      leave={{ opacity: 0, transform: `matrix3d(1.45, 0.02, 0.00, 0.0005, 0.025, 1.45,0.00,0.0001,0,0,1,0,0,0,10,1)`, pointerEvents: 'none' }}
    >
      {props.age && (styles =>
        <Full style={styles} height={`${props.wh}px`} zindex={200}>
          <AgeVerification/>
        </Full>
      )}
    </Transition>
    <Transition
      from={{ opacity: 0, transform: `matrix3d(1.5,0.02,0.00, -0.00075, -0.02, 0.75,0.0005, 0.0001,0,0,1,0,0,0,10,1)` }}
      enter={{ opacity: 1, transform: `transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)` }}
      leave={{ opacity: 0, transform: `matrix3d(1.5,0.02,0.00, 0.0005, 0.02, 0.75, 0.00, 0.0001,0,0,1,0,0,0,10,1)`, pointerEvents: 'none' }}
    >
      {(props.apiData && !props.age) && (styles =>
        <Full style={styles} height={`${props.wh}px`} overflow={'scroll'}>
          <Main>
            {props.children}
          </Main>
        </Full>
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
  width: 100vw;
  position: relative;
`

const Full = styled.div`
  width: 100%;
  height: ${props => props.height};
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${props => props.zindex || 100};
  overflow-x: hidden;
  overflow-y: ${props => props.overflow || 'hidden'}
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
