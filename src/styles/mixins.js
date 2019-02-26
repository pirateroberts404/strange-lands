import { css, keyframes } from 'styled-components'
import { spacing, fonts, shared, breakpoints, colors, widths, heights, font_sizes } from './theme'

// Media Queries
const media = {
  small: (...args) => css`
    @media (max-width: 500px) {
      ${ css(...args) }
    }
  `,
  medium: (...args) => css`
    @media (min-width: ${breakpoints.medium}px) {
      ${ css(...args) }
    }
  `,
  tablet: (...args) => css`
    @media (max-width: ${breakpoints.tablet_w}px) and (min-height: ${breakpoints.table_h}px) {
      ${ css(...args)}
    }
  `,
  desktopNav: (...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${ css(...args) }
    }
  `,
  big: (...args) => css`
    @media (min-width: ${breakpoints.big}px) {
      ${ css(...args) }
    }
  `,
  touch: (...args) => css`
    @media (hover: none) {
      ${ css(...args) }
    }
  `,
  vert: (...args) => css`
    @media (min-width: ${breakpoints.desktop}px) and (min-height: 900px) {
      ${ css(...args)}
    }
  `,
}

// Style

const gradient = css`
  background: #3023ae;
  background: -moz-linear-gradient(45deg, ${colors.blue} 0%, ${colors.purple} 51%, ${colors.orange} 100%);
  background: -webkit-linear-gradient(45deg, ${colors.blue} 0%, ${colors.purple} 51%, ${colors.orange} 100%);
  background: linear-gradient(45deg, ${colors.blue} 0%, ${colors.purple} 51%, ${colors.orange} 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${colors.blue}', endColorstr='${colors.orange}',GradientType=1 );
`

// Layout & Positioning UTILS
const maxWidth = css`
  width: 100%;
  max-width: ${widths.max_width};
`

const absoluteCentered = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`

const fixedTopLeft = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const mainPadding = css`
  padding: ${spacing.double_pad};
`

const scrollPanel = css`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

// TYPOGRAPHY
const sansFont = css`
  font-family: ${fonts.sans};
  font-weight: bold;
  color: ${colors.white};
  font-weight: lighter;
`

const giantType = css`
  ${sansFont};
  font-size: ${font_sizes.giant_sm};
  line-height: 1;
  text-align: center;
  ${media.desktopNav`
    font-size: ${font_sizes.giant};
  `}
`

const bigType = css`
  ${sansFont};
  font-size: ${font_sizes.big_sm};
  line-height: 1;
  text-align: left;
  ${media.desktopNav`
    font-size: ${font_sizes.big};
  `}
`

const mediumType = css`
  ${sansFont};
  font-size: ${font_sizes.medium};
  line-height: 1;
  text-align: center;
  ${media.desktopNav`
    font-size: ${font_sizes.medium};
  `}
`

const navType = css`
  ${sansFont};
  font-size: 22vmin;
  line-height: .8;
  letter-spacing: -2px;
  ${media.desktopNav`
    font-size: 25vh;
    line-height: .8;
    letter-spacing: -4px;
  `}
`

const bodyType = css`
  ${sansFont};
  color: ${colors.white};
  width: 100%;
  font-size: ${font_sizes.body_sm};
  ${media.desktopNav`
    font-size: ${font_sizes.body};
  `}
`

const smallType = css`
  ${sansFont};
  font-size: ${font_sizes.small_sm};
  line-height: 1.45;
  width: 100%;
  ${media.medium`
    font-size: ${font_sizes.small};
  `}
`

const microType = css`
  ${sansFont};
  font-size: ${font_sizes.micro_sm};
  line-height: 1.25;
  letter-spacing: 1px;
  ${media.medium`
    font-size: ${font_sizes.micro};
  `}
`

const linkInit = css`
  text-decoration: none;  
  &:hover {
    text-decoration: none;
  }
`

const defaultLink = css`
  ${sansFont};
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  text-decoration: none;
  color: ${colors.black};
  cursor: pointer;
  span {
    position: relative;
    z-index: 10;
    display: block;
  }
  &.active {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
    color: ${colors.mint};
  }
`

const opacityTransition = css`
  transition: opacity 250ms ease-in-out;
  will-change: opacity;
`

// STYLE UTILS
const buttonInit = css`
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  -webkit-appearance: none;
  border: 0;
  background-color: rgba(255,255,255,0);
  border-radius: 0;
  appearance: none;
  cursor: pointer;
  display: block;
  ${microType};
`

const transitionAll = (time) => {
  return css`
    transition-property: all;
    transition-duration: ${time}ms;
    transition-timing-function: ease;
  `
}

const shadow = css`
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
`

// Flex Layout
const flexColumn = css`
  display: flex;
  flex-direction: column;
`
const flexColumnCentered = css`
  ${flexColumn};
  align-items: center;
`

const flexRow = css`
  display: flex;
  flex-direction: row;
`

const flexRowWrap = css`
  ${flexRow};
  flex-wrap: wrap;
`

const flexRowCenteredVert = css`
  ${flexRow};
  align-items: center;
`

const flexRowCenteredAll = css`
  ${flexRowCenteredVert};
  justify-content: center;
`

const flexCenteredAll = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const flexRowSpaceBetween = css`
  ${flexRow};
  justify-content: space-between;
`

// Animation
const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const animationRotate = css`
  animation: ${spin} 700ms linear 0s infinite normal;
  animation-fill-mode: forwards;
`

const simpleFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const pulseAnimation = css`
  animation: 350ms linear ${pulse} infinite;
`

const animationFadeIn = (time, delay) => {
  return css`
    animation: ${simpleFade} ${time}ms ease normal;
    animation-delay: ${delay}ms;
    animation-fill-mode: both;
  `
}

const borderRadius = (radius) => {
  return css`
    border-radius: ${radius}!important;
  `
}

const textShadow = (blur, color) => {
  return css`
    text-shadow: 2px 2px ${blur}px ${color};
  `
}

const fullBg = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const fullWindow = css`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`

const absoluteTopFull = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const fancyScroll = css`
  &::-webkit-scrollbar {
    width: 1rem;
    border-left: ${shared.border_thin};
    position: absolute;
    z-index: 9000;
    display: none;
  }
  &::-webkit-scrollbar-track {
    border-left: ${shared.border_thin};
    background: ${colors.white};
    width: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.green};
    border-left: ${shared.border_thin};
    width: 1rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.grey};
    width: 1rem;
    cursor: pointer;
  }
`

const menuTransition = css`
  transition: transform 500ms ease;
  will-change: transform;
`

export {
  sansFont,
  media,
  maxWidth,
  absoluteCentered,
  fixedTopLeft,
  mainPadding,
  scrollPanel,
  bigType,
  giantType,
  mediumType,
  bodyType,
  smallType,
  microType,
  monoP,
  defaultLink,
  transitionAll,
  buttonInit,
  shadow,
  animationRotate,
  animationFadeIn,
  flexColumn,
  flexColumnCentered,
  flexRow,
  flexRowWrap,
  flexRowCenteredVert,
  flexRowSpaceBetween,
  flexRowCenteredAll,
  flexCenteredAll,
  borderRadius,
  pulseAnimation,
  fullBg,
  grid,
  fullWindow,
  positionClasses,
  absoluteTopFull,
  opacityTransition,
  wrapperWidths,
  textShadow,
  fancyScroll,
  linkInit,
  menuTransition,
  navType,
  gradient,
}