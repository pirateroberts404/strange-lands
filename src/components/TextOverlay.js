import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { StyledMarkup, Article } from './../styles/components'
import { fullWindow, flexColumn } from './../styles/mixins'
import { spacing } from './../styles/theme'

class TextOverlay extends React.Component {
  constructor (props) {
    super(props)
    this.article = React.createRef();
    this.state = {
      scroll: false
    }
  }

  componentWillMount() {
    setTimeout(() => {
      if (this.article.current.clientHeight > (this.props.wh - 200)) {
        this.setState({
          scroll: true
        })
      }
    }, 1)
  }
  
  render() {
    return (
      <TextOverlayWrapper height={this.props.wh} className={this.state.scroll ? 'scroll' : 'no-scroll'}>
        <Article ref={this.article}>
          <StyledMarkup dangerouslySetInnerHTML={{ __html: this.props.copy }} />
        </Article>
      </TextOverlayWrapper>
    )
  }
}

export default connect(
  state => ({
    wh: state.resizeState.window_height,
  })
)(TextOverlay)

// STYLES
const TextOverlayWrapper = styled.div`
  ${fullWindow};
  ${flexColumn};
  height: ${props => props.height}px;
  z-index: 2;
  padding-left: ${spacing.left_desk};
  &.scroll {
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    article {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  }
  &.no-scroll {
    justify-content: center;
  }
`
