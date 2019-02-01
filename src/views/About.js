import React from 'react'
import { Head, optionsData, ResponsiveWrapper, FitImage, TextOverlay, FullWindow } from './../components'
import { MobileHero, StyledMarkup, Article } from './../styles/components'

export default optionsData((props) =>
  <React.Fragment>
    <Head title={`About`} />
    <ResponsiveWrapper
      desktop={
        <FullWindow>
          <TextOverlay copy={props.about_copy}/>
          <FitImage src={props.image_desktop_about} srcset={true}/>
        </FullWindow>
      }
      mobile={
        <React.Fragment>
          <MobileHero height={`100vw`}>
            <FitImage src={props.image_mobile_about} srcset={true}/>
          </MobileHero>
          <Article>
            <StyledMarkup dangerouslySetInnerHTML={{ __html: props.about_copy }} />
          </Article>
        </React.Fragment>
      }
    />    
  </React.Fragment>
)
