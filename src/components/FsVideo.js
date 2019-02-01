import React from 'react'
import styled from 'styled-components'
import { absoluteCentered, animationFadeIn } from '../styles/mixins';

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.video = React.createRef();
  }

  componentWillMount() {
    setTimeout(() => { this.video.current.play() }, 50)
  }

  render() {
    return(
      <VideoWrapper>
        <video ref={this.video} playsInline muted loop width='100%' height='100%' src={this.props.src}/>
      </VideoWrapper>
    )
  }
}

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  video {
    ${absoluteCentered};
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`