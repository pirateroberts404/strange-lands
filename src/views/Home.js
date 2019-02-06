import React from 'react'
import styled from 'styled-components'
import { Head, optionsData, FullWindow } from './../components'
import { H1 } from './../styles/components'
import { flexCenteredAll, fullWindow } from './../styles/mixins'

export default optionsData(props =>
  <React.Fragment>
    <Head title={`Home`} />
    <FullWindow position={`relative`}>
      <Centered>
        <H1 dangerouslySetInnerHTML={{ __html: props.hero_cta }} />
      </Centered>
    </FullWindow>
  </React.Fragment>
)

const Centered = styled.div`
  ${fullWindow};
  ${flexCenteredAll};
`