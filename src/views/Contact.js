import React from 'react'
import styled from 'styled-components'
import { Head, optionsData } from './../components'
import { ExternalLink, H1, ScrollContent } from './../styles/components'
import { media } from './../styles/mixins'
import { spacing } from './../styles/theme'

export default optionsData((props) =>
  <React.Fragment>
    <Head title={`Contact`} />
    <ScrollContent>
      <Links>
        <H1>{props.contact_headline}</H1>
        {props.contact_email.map((item, i) =>
          <ExternalLink key={`ct-${i}`}><span>{item.address}</span></ExternalLink>
        )}
      </Links>
    </ScrollContent>
  </React.Fragment>
)

const Links = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-top: 8rem;
  padding-bottom: 6rem;
  padding-left: 6px;
  ${media.desktopNav`
    padding: 6rem 0;
  `}
  h1 {
    padding-bottom: 3rem;
  }
  a {
    padding-bottom: ${spacing.single_pad};
    &:last-child {
      padding-bottom: ${spacing.double_pad};
    }
  }
`