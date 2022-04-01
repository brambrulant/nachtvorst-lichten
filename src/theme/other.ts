export interface OtherOptions {
  spacing: number
  MuiButtonBase: {
    disableRipple: boolean
  }
}

const other: OtherOptions = {
  spacing: 8,
  MuiButtonBase: {
    // The properties to apply
    disableRipple: true, // No more ripple, on the whole application!
  },
}

export default other
