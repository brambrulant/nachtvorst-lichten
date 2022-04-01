import { PaletteOptions } from '@mui/material'

interface NachtvorstColors {
  primary: {
    red: string
    green: string
    blue: string
    amber: string
    pink: string
  }
  grayscale: {
    purgatory: string
    lighter: string
    base: string
    darker: string
    theBeast: string
    black: string
  }
  background: string
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    nachtvorst: NachtvorstColors
  }

  interface PaletteOptions {
    nachtvorst?: NachtvorstColors
  }
}

const nachtvorst: NachtvorstColors = {
  primary: {
    red: '#C62828',
    green: '#00897B',
    blue: '#404F9F',
    amber: '#FF8F00',
    pink: '#F390B0',
  },
  grayscale: {
    purgatory: '#F7F7F7',
    lighter: '#E1E1E1',
    base: '#7E7E7E',
    darker: '#515151',
    theBeast: '#3B3B3B',
    black: '#222222',
  },
  background: '#121212',
}

const colors: PaletteOptions = {
  primary: {
    light: nachtvorst.primary.green,
    main: nachtvorst.primary.green,
    dark: nachtvorst.primary.green,
  },

  secondary: {
    light: nachtvorst.primary.green,
    main: nachtvorst.primary.green,
    dark: nachtvorst.primary.green,
  },

  success: {
    light: nachtvorst.primary.green,
    main: nachtvorst.primary.green,
    dark: nachtvorst.primary.green,
  },

  background: {
    default: nachtvorst.background,
  },

  nachtvorst,
}

export default colors
