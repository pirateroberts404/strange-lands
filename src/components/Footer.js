import React from 'react'
import styled from 'styled-components'
import { flexColumn } from './../styles/mixins'
import MailScrape from './MailScrape'
import ScrollToTop from './ScrollToTop'
import { colors, spacing } from './../styles/theme'

export default () =>
  <FooterWrapper>
    <MailScrape/>
    <ScrollToTop/>
  </FooterWrapper>

const FooterWrapper = styled.footer`
  ${flexColumn};
  width: 100vw;
  padding: ${spacing.double_pad} ${spacing.single_pad};
  background-color: ${colors.dk_blue};
  overflow-x: hidden;
  z-index: 9000;
  position: relative;
`