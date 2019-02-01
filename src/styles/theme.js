
import { toRem } from './../scripts'
import { meta_defaults } from './../../config.json'

const units = {
  base_pad: 20,
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
  home_indent: `15vw`,
  medium_left: `3rem`,
  left_desk: `5.5rem`,
}

const colors = {
  bg: meta_defaults.bgcolor,
  white: '#ffffff',
  black: '#000000',
  blue: '#11069F',
  dk_blue: '#00205B',
  lt_blue: '#0000FF',
  mint: '#A2E4B8',
  powder: '#A7C6ED',
  pink: '#FF7276',
}

const fonts = {
  sans: `'Platform Bold', Arial, system-ui, sans-serif`,
}

const baseFontSize = 16

const font_sizes = {
  giant: `40vmin`,
  giant_sm: `25vmin`,
  medium: `27vmin`,
  medium_sm: `10vmin`,
  body: `3rem`,
  body_sm: `2.5rem`,
  small: `1.75rem`,
  small_sm: `1.75rem`,
  micro: `1rem`,
  micro_sm: `1rem`,
}

const shared = {
  border_weight: '5px',
  logo_size_desk: '8rem',
  border_thin: '1px solid #180c06',
  border_thick: '3px solid #180c06',
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
