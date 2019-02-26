import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { flexColumn, smallType, flexRowCenteredVert, flexRow, mouseType, hoverPurple } from './../styles/mixins'
import MailScrape from './MailScrape'
import ScrollToTop from './ScrollToTop'
import optionsData from './optionsData'
import Socials from './Socials'
import CopyRight from './CopyRight'
import { spacing, colors } from './../styles/theme'

export default optionsData(props =>
  <FooterWrapper>
    <FooterInner>
      <MailScrape/>
      {/*<ScrollToTop/>*/}
      <Socials social_links={props.social_links}/>
      <FooterBottom>
        <div className={`inner`}>
          <p className={`info`}>{props.bottom_info}</p>
          <BottomLegal>
            <CopyRight/>
            <Link to={`/privacy`}>Privacy Policy</Link>
          </BottomLegal>
        </div>
      </FooterBottom>
    </FooterInner>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  ${flexColumn};
  margin: calc(${spacing.big_pad} * 3) auto ${spacing.big_pad};
  width: 100vw;
  padding: ${spacing.double_pad} ${spacing.single_pad};
  position: relative;
	z-index: 10;
`

const FooterInner = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: auto;
  position: relative;
`

const FooterBottom = styled.div`
  ${flexRowCenteredVert};
  width: 100%;
  height: 20rem;
  .inner {
    width: 100%;
    ${flexRow};
    justify-content: space-between;
    align-items: flex-end;
  }
  .info {
    ${smallType};
    color: ${colors.white};
    max-width: 23rem;
  }
`

const BottomLegal = styled.div`
  ${flexRow};
  flex-grow: none;
  flex-shrink: 0;
  position: relative;
  a {
    color: ${colors.white};
    ${mouseType};
    text-decoration: none;
    cursor: pointer;
    margin-left: 1rem;
    padding-left: 1rem;
    border-left: 1px solid ${colors.white};
    ${hoverPurple};
  }
`