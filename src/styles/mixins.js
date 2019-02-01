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
  width: 100vw;
  height: 100vh;
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
`

const bigType = css`
  ${sansFont};
  font-size: ${font_sizes.giant_sm};
  line-height: .8;
  letter-spacing: -.75vmin;
  ${media.desktopNav`
    font-size: ${font_sizes.giant};
  `}
  ${media.medium`
    font-size: ${font_sizes.giant};
  `}
  ${media.vert`
    font-size: 34vh;
  `}
`

const mediumType = css`
  ${sansFont};
  font-size: ${font_sizes.medium};
  line-height: .75;
  letter-spacing: -1px;
  ${media.desktopNav`
    font-size: ${font_sizes.medium};
  `}
  ${media.medium`
    font-size: ${font_sizes.medium};
  `}
`

const mediumTypeSmall = css`
  ${sansFont};
  font-size: ${font_sizes.medium_sm};
  line-height: .95;
  padding-bottom: ${spacing.double_pad};
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
  font-size: 2.8rem;
  line-height: 1.25;
  color: ${colors.white};
  width: 100%;
  margin-bottom: ${spacing.single_pad};
  &:last-child{
    margin-bottom: 0;
  }
  ${media.desktopNav`
    font-size: 3.5rem;
  `}
  ${media.medium`
    font-size: 4.25rem;
  `}
`

const bodyTypeSmall = css`
  ${sansFont};
  font-size: 2.25rem;
  line-height: 1.45;
  color: ${colors.white};
  width: 100%;
  letter-spacing: -1px;
  ${media.medium`
    font-size: 3rem;
  `}
`

const smallType = css`
  ${sansFont};
  font-size: ${font_sizes.small_sm};
  line-height: 1.25;
  color: ${colors.white};
  ${media.medium`
    font-size: ${font_sizes.small};
  `}
`

const microType = css`
  ${sansFont};
  font-size: ${font_sizes.micro_sm};
  line-height: 1.25;
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

const positionClasses = css`
  display: flex;
  flex-direction: column;
  &.centered {
    align-items: center;
    justify-content: center;
  }
  &.centered_right {
    align-items: flex-end;
    justify-content: center;
  }
  &.top_right {
    align-items: flex-end;
    justify-content: flex-start;
  }
  &.bottom_right {
    align-items: flex-end;
    justify-content: flex-end;
  }
  &.centered_left {
    align-items: flex-start;
    justify-content: center;
  }
  &.top_left {
    align-items: flex-start;
    justify-content: flex-start;
  }
  &.bottom_left {
    align-items: flex-start;
    justify-content: flex-end;
  }
`

const wrapperWidths = css`
  width: 100%;
  margin: 0 auto;
  &.full_width {
    max-width: 100%;
  }
  &.max_large {
    max-width: ${widths.max_large};
  }
  &.max_medium {
    max-width: ${widths.max_medium};
  }
  &.max_small {
    max-width: ${widths.max_small};
  }
`

const grid = css`
  flex-grow: 0;
  flex-shrink: 0;
  li {
    width: 50%;
    position: relative;
  }
  ${media.desktopNav`
    &.one_col > li {
      width: 100%;
    }
    &.three_col > li {
      width: calc(100% / 3);
    }
    &.four_col > li {
      width: calc(100% / 4);
    }
    &.two_col > li {
      width: 50%;
    }
  `}
  ${media.big`
    &.four_col > li {
      width: calc(100% / 5);
    }
  `}
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

const fixedHero = (top, bottom, left) => {
  return css`
    &.fixed-hero {
      margin: 0;
      max-height: 100vh;
      height: 100vh;
      overflow: hidden;
      ${media.desktopNav`
        padding-bottom: ${bottom};
        padding-top: ${top};
        padding-left: ${left};
        position: fixed;
        top: 0;
        height: 100vh;
      `}
    }
  `
}

const fixedWindow = css`
  ${fancyScroll};
  padding: ${heights.header} 0 ${heights.footer};
  width: 50vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 100;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  article {
    padding-top: ${spacing.double_pad};
    padding-bottom: ${heights.footer};
  }
`

const menuTransition = css`
  transition: transform 500ms ease;
  will-change: transform;
`

const buttonWidth = `36px`

const buttonWrapper = css`
  ${flexCenteredAll};
  ${buttonInit};
  ${shadow};
  width: ${buttonWidth};
  height: ${buttonWidth};
  border-radius: calc(${buttonWidth} / 2);
  background-color: ${colors.blue};
  padding: 0;
  position: relative;
  svg {
    ${absoluteCentered};
    width: 50%;
    height: 50%;
    object-fit: contain;
    margin: auto;
  }
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
  fixedHero,
  halfFixed,
  fixedWindow,
  fancyScroll,
  linkInit,
  bodyTypeSmall,
  mediumTypeSmall,
  menuTransition,
  navType,
  buttonWrapper,
}