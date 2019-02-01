import React from 'react'
import { Head, PopupGrid } from './../components'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { spacing, colors } from './../styles/theme'
import { fixedTopLeft, flexRowCenteredVert, media } from './../styles/mixins'
import { H1 } from './../styles/components'

const Follow = props =>
  <React.Fragment>
    <Head title={`Follow`} />
    <FollowHeadline>
      { props.apiData && <H1 className={(props.scroll !== 'at-top') ? 'hide' : 'show'}>{props.apiData.options.instagram_headline}</H1> }
    </FollowHeadline>
    <FollowSection>
      { props.instaData && <PopupGrid images={props.instaData}/> }
    </FollowSection>
  </React.Fragment>

export default connect(
  state => ({
    apiData: state.apiData,
    instaData: state.instaData,
    scroll: state.scrollDirection,
  })
)(Follow)

const FollowSection = styled.section`
  ${media.desktopNav`
    padding-left: ${spacing.left_desk};
  `}
`

const FollowHeadline = styled.div`
  ${fixedTopLeft};
  ${flexRowCenteredVert};
  pointer-events: none;
  z-index: 1;
  H1 {
    color: ${colors.pink};
  }
  padding-left: 6px;
  ${media.desktopNav`
    padding-left: ${spacing.left_desk};
  `}
`