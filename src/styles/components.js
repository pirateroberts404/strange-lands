import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { spacing, colors, heights, shared } from './theme'
import * as _ from './mixins'

// TYPE
const H1 = styled.h1`
  ${_.bigType};
`

const H2 = styled.h2`
  ${_.mediumType};
`

const H3 = styled.h3`
  ${_.mediumType};
`

const H4 = styled.h4`
  ${_.mediumType};
`

const H5 = styled.h5`
  ${_.bodyType};
`

const P = styled.p`
  ${_.bodyType};
`

const Article = styled.article`
  width: 100%;
  max-width: ${shared.max_width};
  padding: ${spacing.double_pad} ${spacing.single_pad};
  position: relative;
  ${_.media.desktopNav`
    padding: 0 ${spacing.double_pad};
  `}
`

const ProportionWrapper = styled.div`
  height: 0;
  overflow-y: visible;
  position: relative;
  width: 100%;
  padding-bottom: ${props => props.Mobile || `100%`};
  ${_.media.medium`
    padding-bottom: ${props => props.Proportion || `100%`};
  `}
  ${_.media.big`
    padding-bottom: ${props => props.Max || `100%`};
  `}
`

// UI
const StyledLink = styled(Link)`
  ${_.defaultLink};
`

const ExternalLink = styled.a`
  ${_.defaultLink};
  ${_.navType};
  color: ${colors.pink};
`

const SocialLink = styled.a`
  ${_.flexCenteredAll};
  width: ${props => props.size || `4rem`};
  height: ${props => props.size || `4rem`};
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

// WRAPPERS
const ModalWrapper = styled.div`
  ${_.flexCenteredAll};
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
`

const ModalContentWrapper = styled.div`
  ${_.flexCenteredAll};
  max-height: ${props => props.maxHeight};
  width: 100%;
  height: 100%;
  max-width: 84rem;
  position: relative;
  z-index: 1000;
`

const CloseButton = styled.button`
  ${_.buttonInit};
  position: fixed;
  width: ${props => props.size || `4rem`};
  height: ${props => props.size || `4rem`};
  top: ${props => props.position || `.75rem`};
  right: ${props => props.position || `.75rem`};
  padding: 0;
  z-index: 11000;
  cursor: pointer;
  svg {
    ${_.absoluteCentered};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const MenuWrapper = styled.menu`
  ${_.fixedTopLeft};
  ${_.shadow};
  ${_.menuTransition};
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  transform: translateX(-100vw);
  background-color: ${colors.dk_blue};
  ${_.media.desktopNav`
    width: calc(100vw - 25rem);
  `}
  &.active {
    transform: translateX(0);
  }
`

const Modal = styled.div`
  ${_.flexRowCenteredAll};
  position: fixed;
  z-index: 12000;
  width: 100vw;
  height: ${props => props.height}px;
  background-color: ${props => props.BgColor};
  padding: 6rem ${spacing.single_pad};
  ${_.media.desktopNav`
    padding: calc(${heights.header} / 2);
  `}
`

const ModalContent = styled.div`
  ${_.flexCenteredAll};
  flex-direction: column;
  width: 100%;
  height: 100%;
  ${_.media.desktopNav`
    ${_.flexRowCenteredAll};
  `}
`

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Article,
  SocialLink,
  StyledLink,
  ExternalLink,
  ModalWrapper,
  ModalContentWrapper,
  Modal,
  ModalContent,
  CloseButton,
  ProportionWrapper,
  MenuWrapper,
}