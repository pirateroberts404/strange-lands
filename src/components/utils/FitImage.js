import React, { useState }  from 'react'
import styled, { css } from 'styled-components'

export default props => {
  const [loaded, isLoaded] = useState(false)
  return (
    <ImgWrapper alpha={loaded ? 1 : 0}> 
      {(props.srcset) 
        ? <ImgFit width={props.src.width} height={props.src.height} src={props.src.sizes.small} srcSet={`${props.src.sizes.large} 300w, ${props.src.sizes.large} 768w, ${props.src.sizes.large} 1280w, ${props.src.url} 3200w`} onLoad={() => isLoaded(true)} fit={props.fit || 'cover'}/>
        : <ImgFit src={props.src} onLoad={() => isLoaded(true)} fit={props.fit || 'cover'}/>
      }
    </ImgWrapper>
  )
}

const sharedRules = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ImgWrapper = styled.div`
  ${sharedRules};
  opacity: ${props => props.alpha};
  width: 100%;
  height: 100%;
  transition: opacity 500ms ease-in-out;
  will-change: opacity;
  overflow: hidden;
`

const ImgFit = styled.img`
  ${sharedRules};
  object-fit: ${props => props.fit};
  bottom: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
`
