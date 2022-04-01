import { createTheme, ThemeOptions } from '@mui/material'

import shadows from './shadows'
import typography from './typography'
import palette from './colors'
import other from './other'

const theme: ThemeOptions = {
  ...other,
  palette,
  typography,
  shadows,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
}

export default createTheme(theme)
