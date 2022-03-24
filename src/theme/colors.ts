import { PaletteOptions } from '@mui/material'

interface ColorGroup {
  lighter: string
  base: string
  darker: string
}

interface NachtvorstColors {
  primary: {
    red: ColorGroup
    green: ColorGroup
    blue: ColorGroup
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
    red: {
      lighter: '#f18e8e',
      base: '#F38181',
      darker: '#f55353',
    },
    green: {
      lighter: '#EAFFD0',
      base: '#bdf59a',
      darker: '#a5d73f',
    },
    blue: {
      lighter: '#b2e3d5',
      base: '#95E1D3',
      darker: '#3bd3ac',
    },
  },
  grayscale: {
    purgatory: '#F5F5F5',
    lighter: '#E0E0E0',
    base: '#CCCCCC',
    darker: '#B8B8B8',
    theBeast: '#666666',
    black: '#262626',
  },
  background: '#F4F7FC',
}

const colors: PaletteOptions = {
  primary: {
    light: nachtvorst.primary.green.lighter,
    main: nachtvorst.primary.green.base,
    dark: nachtvorst.primary.green.darker,
  },

  secondary: {
    light: nachtvorst.primary.green.lighter,
    main: nachtvorst.primary.green.base,
    dark: nachtvorst.primary.green.darker,
  },

  success: {
    light: nachtvorst.primary.green.lighter,
    main: nachtvorst.primary.green.base,
    dark: nachtvorst.primary.green.darker,
  },

  background: {
    default: nachtvorst.background,
  },

  nachtvorst,
}

export default colors
