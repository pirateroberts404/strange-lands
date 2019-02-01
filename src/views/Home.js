import React from 'react'
import { Head, optionsData, ResponsiveWrapper, Carousel } from './../components'

export default optionsData(props =>
  <React.Fragment>
    <Head title={`Home`} />
    <ResponsiveWrapper
      desktop={<Carousel images={props.desktop_slides_home} speed={parseInt(props.home_slideshow_speed, 10)}/>}
      mobile={<Carousel images={props.mobile_slides_home} speed={parseInt(props.home_slideshow_speed, 10)}/>}
    />
  </React.Fragment>
)
