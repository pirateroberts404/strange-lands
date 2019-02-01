import React from 'react'
import { connect } from 'react-redux'
import { ageVerification } from './state/actions'
import styled, { createGlobalStyle } from 'styled-components'
import { flexColumn } from './styles/mixins'
import { AgeVerification, DesktopMenu, ResponsiveWrapper, MobileMenu, Navigation, Footer } from './components'
import { colors } from './styles/theme'
import { MAIN_MENU } from './../config.json'

const Document = props =>
  <React.Fragment>
    <GlobalStyles />
    {props.age && <AgeVerification ClickFunction={() => props.set_verification(false)} />}
    {(props.apiData && !props.age) &&
      <React.Fragment>
        <ResponsiveWrapper
          desktop={ 
            <DesktopMenu>
              <Navigation menu_items={MAIN_MENU}/>
            </DesktopMenu> }
          mobile={ 
            <MobileMenu>
              <Navigation menu_items={MAIN_MENU}/>
            </MobileMenu> }
        />
        <Main>
          {props.children}
        </Main>
        {props.route !== '/' && 
          <ResponsiveWrapper
            desktop={false}
            mobile={<Footer/>}
          />
        }
      </React.Fragment>
    }
  </React.Fragment>

export default connect(
  state => ({
    apiData: state.apiData,
    age: state.verificationState,
    menu: state.menuState,
    resizeState: state.resizeState,
    route: state.routeState,
  }),
  dispatch => ({
    set_verification: (bool) => dispatch(ageVerification(bool))
  })
)(Document)

// MAIN STYLING
const Main = styled.main`
  ${flexColumn};
  width: 100vw;
  position: relative;
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
