import React from 'react'
import { Head, optionsData, FsVideo, DispensaryList, FullWindow, ResponsiveWrapper } from './../components'

export default optionsData((props) =>
  <React.Fragment>
    <Head title={`Find Us`} />
    <DispensaryList list={props.dispensary_list} headline={props.find_us_headline}/>
    <FullWindow zIndex={1}>
      <ResponsiveWrapper
        desktop={<FsVideo src={props.find_us_video_desktop} />}
        mobile={<FsVideo src={props.find_us_video} />}
      />
    </FullWindow>
  </React.Fragment>
)
