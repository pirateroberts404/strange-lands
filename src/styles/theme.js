import { toRem } from './../scripts'
import { meta_defaults } from './../../config.json'

const units = {
  base_pad: 10,
  header: 80,
  footer: 80,
  max: 1020,
}

const breakpoints = {
  mobile: 0,
  desktop: 860,
  medium: 1200,
  big: 1500,
  tablet_w: 960,
  tablet_h: 800,
}

const widths = {
  max_large: toRem(units.max * 1.25),
  max_medium: toRem(units.max),
  max_small: toRem(units.max * .75),
}

const heights = {
  header: toRem(units.header),
  mobile_header: toRem(units.header),
  footer: toRem(units.footer),
}

const spacing = {
  micro_pad: toRem(units.base_pad / 2),
  single_pad: toRem(units.base_pad),
  double_pad: toRem(units.base_pad * 2),
  big_pad: toRem(units.base_pad * 3),
}

const colors = {
  bg: meta_defaults.bgcolor,
  white: '#ffffff',
  black: '#171618',
  grey_blue: '#245AA6',
  blue: '#3023AE',
  map_blue: '#2656A6',
  purple: '#E52ADF',
  orange: '#F59223',
  magenta: '#EE2BFF',
}

const fonts = {
  sans: `'Souvenir Light', Georgia, Times, serif`,
}

const baseFontSize = 16

const font_sizes = {
  giant: `7rem`,
  giant_sm: `5.25rem`,
  big: `6rem`,
  big_sm: `3.75rem`,
  medium: `4rem`,
  medium_sm: `3rem`,
  body: `3rem`,
  body_sm: `2rem`,
  small: `1.75rem`,
  small_sm: `1.75rem`,
  micro: `1.5rem`,
  micro_sm: `1.5rem`,
}

const shared = {
  border_weight: '1px',
  border_thin: `1px solid ${colors.white}`,
  max_width: toRem(units.max),
}

export {
  units,
  breakpoints,
  widths,
  heights,
  spacing,
  colors,
  fonts,
  baseFontSize,
  font_sizes,
  shared
}
