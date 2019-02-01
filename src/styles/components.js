import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { spacing, colors, heights, shared } from './theme'
import * as _ from './mixins'

// TYPE
const H1 = styled.h1`
  ${_.navType};
  padding-bottom: ${spacing.single_pad};
  color: ${props => props.color || colors.lt_blue};
  opacity: 1;
  ${_.opacityTransition};
  &.hide {
    opacity: 0;
  }
`

const H2 = styled.h2`
  ${_.mediumType};
  color: ${colors.blue};
`

const H2Small = styled.h2`
  ${_.mediumTypeSmall};
  color: ${colors.white};
`

const H3 = styled.h3`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  color: ${colors.blue};
`

const H4 = styled.h4`
  ${_.bodyTypeSmall};
`

const H5 = styled.h5`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  color: ${colors.black};
`

const H6 = styled.h6`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
`

const P = styled.p`
  ${_.bodyType};
`

const MediumP = styled.p`
  ${_.bodyTypeSmall};
`

const SmallP = styled.p`
  ${_.smallType};
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

const StyledMarkup = styled.div`
  &.pad-top {
    padding-top: ${spacing.double_pad};
  }
  h1 {
    ${_.bigType};
  }
  h2 {
    ${_.mediumType};
  }
  h3 {
    ${_.bodyType};
  }
  h4 {
    ${_.bodyType};
  }
  h5 {
    ${_.bodyType};
  }
  h6 {
    ${_.bodyType};
  }
  p {
    ${_.bodyType};
  }
  a {
    ${_.defaultLink};
  }
  li {
    ${_.bodyType};
  }
`

const ScrollContent = styled.section`
  width: 100%;
  min-height: ${props => props.height}px;
  position: relative;
  z-index: 10;
  ${_.media.desktopNav`
    padding-left: ${spacing.left_desk};
  `}
  h1 {
    padding-bottom: 6rem;
  }
  article {
    margin: 0 auto;
    padding: 8rem ${spacing.micro_pad};
    ${_.media.desktopNav`
      padding: 6rem ${spacing.double_pad};
    `}
    * {
      color: ${colors.blue};
    }
    .inner {
      padding-bottom: ${spacing.double_pad};
      p {
        ${_.flexColumn};
      }
    }
  }
`

const GridWrapper = styled.ul`
  ${_.wrapperWidths};
  ${_.flexRowWrap};
  ${_.grid};
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

const MobileHero = styled.div`
  width: 100vw;
  height: ${props => props.height || `61.5vw`};
  position: relative;
  margin: auto;
  overflow: hidden;
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
  H2Small,
  H3,
  H4,
  H5,
  H6,
  P,
  MediumP,
  SmallP,
  Article,
  StyledMarkup,
  SocialLink,
  StyledLink,
  ExternalLink,
  ModalWrapper,
  ModalContentWrapper,
  Modal,
  ModalContent,
  CloseButton,
  GridWrapper,
  ProportionWrapper,
  MobileHero,
  MenuWrapper,
  ScrollContent,
}