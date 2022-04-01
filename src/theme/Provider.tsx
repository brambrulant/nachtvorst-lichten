import React from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import Global from './Global'
import theme from '.'

export interface Props {
  children: React.ReactNode
}

const MuiThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Global />
    {children}
  </ThemeProvider>
)

export default MuiThemeProvider
