import { TypographyOptions } from '@mui/material/styles/createTypography'
import colors from './colors'

interface SourceSansFonts {
  bold: string
  news: string
  book: string
}

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    sourceSans: SourceSansFonts
  }

  interface TypographyOptions {
    sourceSans?: SourceSansFonts
  }
}

const sourceSans: SourceSansFonts = {
  bold: 'Source Sans Pro, sans-serif',
  news: 'Source Sans Pro, sans-serif',
  book: 'Source Sans Pro, sans-serif',
}

const typography: TypographyOptions = {
  fontSize: 14,
  fontFamily: sourceSans.news,
  sourceSans,

  // Header Big
  h1: {
    fontFamily: sourceSans.bold,
    fontSize: 24,
  },

  h2: {
    fontFamily: sourceSans.bold,
    fontSize: 20,
    textTransform: 'uppercase',
    color: colors.nachtvorst?.grayscale.purgatory,
  },

  // Text Regular
  // Placeholder Text
  // Link Text
  // Phone Number
  body1: {
    fontFamily: sourceSans.news,
    fontSize: 14,
    color: colors.nachtvorst?.grayscale.purgatory,
  },

  // Text Regular - Bold
  // Input Label
  body2: {
    fontFamily: sourceSans.bold,
    fontSize: 14,
  },

  // Table Header
  overline: {
    fontFamily: sourceSans.bold,
    fontSize: 10,
    textTransform: 'none',
  },

  // Badge Text
  // Package Label Text
  caption: {
    fontFamily: sourceSans.news,
    fontSize: 10,
  },

  button: {
    fontSize: 12,
    textTransform: 'none',
  },
}

export default typography
