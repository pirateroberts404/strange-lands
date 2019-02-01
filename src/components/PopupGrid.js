import React from 'react'
import SingleImageModal from './SingleImageModal'
import LazyLoad from 'react-lazyload'
import { GridWrapper, ProportionWrapper } from './../styles/components'

export default props => {
  return (
    <GridWrapper className={`full_width four_col`}>
      {props.images.map((item, i) =>
        <li key={i}>
          <ProportionWrapper>
            <LazyLoad height='100%'>
              <SingleImageModal src={item.thumbnail} title={item.title}/>
            </LazyLoad>
          </ProportionWrapper>
        </li>
      )}
    </GridWrapper>
  )
}