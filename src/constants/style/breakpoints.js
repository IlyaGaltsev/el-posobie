export const maxContent = "1360px"

const size = {
  desktop: "2560px",
  laptop: "1440px",
  laptopS: "980px",
  tablet: "768px",
  mobileL: "425px",
  mobileM: "375px",
  mobileS: "320px"
}

export const device = {
  desktop: `(max-width: ${size.desktop})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopS: `(max-width: ${size.laptopS})`,
  tablet: `(max-width: ${size.tablet})`,
  mobileL: `(max-width: ${size.mobileL})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileS: `(max-width: ${size.mobileS})`
}
