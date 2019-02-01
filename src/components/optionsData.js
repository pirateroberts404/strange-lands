import React from 'react'
import { connect } from 'react-redux'

export default (InnerComponent) => {
  const optionsData = (state) => {
    return (
      <InnerComponent
        {...state.apiData.options}
      />
    )
  }
  return connect(
    state => ({
      apiData: state.apiData
    })
  )(optionsData)
}