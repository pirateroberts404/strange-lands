import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { spacing, colors, heights, shared, font_sizes } from './theme'
import * as _ from './mixins'

// TYPE
const H1 = styled.h1`
  ${_.giantType};
`

const H2 = styled.h2`
  ${_.mediumType};
`

const H3 = styled.h3`
  ${_.bigType};
  padding-bottom: ${spacing.single_pad};
  ${_.media.desktopNav`
    padding-bottom: ${spacing.double_pad};
  `}
`

const H4 = styled.h4`
  ${_.mediumType};
`

const H5 = styled.h5`
  ${_.bigType};
  text-align: center;
`

const H6 = styled.h6`
  ${_.smallType};
  font-weight: bolder;
  padding-bottom: ${spacing.micro_pad};
`

const P = styled.p`
  ${_.bodyType};
`

const SmallP = styled.p`
  ${_.microType};
`

const SmallA = styled.a`
  ${_.microType};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: ${colors.magenta};
  }
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

const HeroWrapper = styled.div`
  width: 100vw;
  overflow-x: hidden;
  overflow-y: visible;
  position: relative;
  height: 100vh;
  max-height: 90vh;
  z-index: 10;
  ${_.media.desktopNav`
    max-height: 70vw;
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

const StyledMarkup = styled.div`
  width: 100%;
  max-width: 86rem;
  &.pad-top {
    padding-top: ${spacing.double_pad};
  }
  h1 {
    ${_.mediumType};
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
  .small {
    font-size: ${font_sizes.small};
  }
`

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  SmallP,
  SmallA,
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
  StyledMarkup,
  HeroWrapper,
}