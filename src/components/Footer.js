import React from 'react'
import styled from 'styled-components'
import { flexColumn } from './../styles/mixins'
import MailScrape from './MailScrape'
import ScrollToTop from './ScrollToTop'
import Socials from './Socials'
import { spacing } from './../styles/theme'

export default () =>
  <FooterWrapper>
    <FooterInner>
      <MailScrape/>
      {/*<ScrollToTop/>*/}
      <Socials/>
    </FooterInner>
  </FooterWrapper>

const FooterWrapper = styled.footer`
  ${flexColumn};
  margin: 20rem auto;
  width: 100vw;
  padding: ${spacing.double_pad} ${spacing.single_pad};
  position: relative;
`

const FooterInner = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: auto;
  position: relative;
`