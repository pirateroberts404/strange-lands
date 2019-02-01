import React from 'react'
import { Head, optionsData, FsVideo, TextOverlay, ResponsiveWrapper, FullWindow } from './../components'
import { StyledMarkup, MobileHero, Article } from './../styles/components'
import { randomArrItem } from './../scripts'

export default optionsData((props) =>
  <React.Fragment>
    <Head title={`Products`} />
    <ResponsiveWrapper
      desktop={
        <React.Fragment>
          <TextOverlay copy={props.product_copy} />
          <FullWindow zIndex={1}>
            <FsVideo src={randomArrItem(props.product_videos_desktop).video_file} />
          </FullWindow>
        </React.Fragment>
      }
      mobile={
        <React.Fragment>
          <MobileHero height={`100vw`}>
            <FsVideo src={randomArrItem(props.product_videos).video_url} />
          </MobileHero>
          <Article>
            <StyledMarkup dangerouslySetInnerHTML={{ __html: props.product_copy }} />
          </Article>
        </React.Fragment>
      }
    />
  </React.Fragment>
)