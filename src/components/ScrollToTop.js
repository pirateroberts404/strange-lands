import React from 'react'
import styled,  { css } from 'styled-components'
import { animateScroll as scroll } from 'react-scroll'
import { buttonWrapper, absoluteCentered } from './../styles/mixins'
import { colors, spacing } from './../styles/theme'
import InstaLogo from './InstaLogo'
import optionsData from './optionsData'

const scrollToTop = () => {
  scroll.scrollToTop({
    duration: 350
  })
}

export default optionsData((props) =>
  <ScrollButtonWrapper>
    <InstaLogo link={props.instagram}/>
    <ScrollButton onClick={scrollToTop}>
      <svg viewBox="0 0 12 12" width="12" height="12"><g strokeWidth="1" fill={colors.pink} stroke={colors.pink}><polyline points="0.5 8.5 6 2.5 11.5 8.5" fill="none" stroke={colors.pink} strokeLinecap="round" strokeLinejoin="round"></polyline></g></svg>
    </ScrollButton>
  </ScrollButtonWrapper>
)

// STYLES
const ScrollButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${spacing.single_pad};
`

const ScrollButton = styled.button`
  ${buttonWrapper};
`