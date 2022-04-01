import { withStyles } from '@mui/styles'

const Global = withStyles((theme) => ({
  '@global': {
    // Define any global styles/classes here
    fontFamily: theme.typography.sourceSans.news,
    body: {
      overflowY: 'auto',
    },

    'body[style*="overflow: hidden;"]': {
      paddingRight: theme.spacing(1),
    },

    '::-webkit-scrollbar': {
      width: theme.spacing(1),
    },

    '::-webkit-scrollbar-track': {
      borderRadius: theme.shape.radius8,
      background: theme.palette,
    },

    '::-webkit-scrollbar-thumb': {
      borderRadius: theme.shape.radius8,
      background: theme.palette.nachtvorst.grayscale.base,
    },

    '::-webkit-scrollbar-thumb:hover': {
      background: theme.palette.nachtvorst.grayscale.darker,
    },

    '::placeholder': {
      color: theme.palette.nachtvorst.grayscale.base,
    },
  },
}))(() => null)

export default Global
