import { Dimensions, StyleSheet } from "react-native"

// Precalculate Device Dimensions for better performance
const x = Dimensions.get("window").width
const y = Dimensions.get("window").height

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1
// const ratioX = 1;
// const ratioY = 1;

// We set our base font size value
const baseUnit = 16

// We're simulating EM by changing font size according to Ratio
const unit = baseUnit * ratioX

// We add an em() shortcut function
function em(value) {
  return unit * value
}

const colors = {
  watermelon: "#ff4c64",
  dodgerBlue: "#4687ff",
  deepGrey: "#535353",
  aquamarine: "#06d0b2",
  blackish: "#111111",
  whiteTwo: "#ffffff",
  warmGrey: "#979797",
  second: "rgba(144, 19, 254, 1)",
  third: "#D33A8B",
  fbColor: "rgba(59, 89, 153, 1)",
  gradient1: "rgba(211, 58, 139, 1)",
  gradient2: "rgba(219, 97, 162, 1)",
  gradient3: "rgba(228, 136, 185, 1)"
}

// Then we set our styles with the help of the em() function
const Style = {
  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1.25),
  PADDING_TOP: 10,
  PADDING_BOTTOM: 20,

  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.25),

  // COLORS
  COLOR_MAIN: "#27AAC5",
  colors,
}

export default Style