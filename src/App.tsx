import React from 'react'

import CenteredContainer from './Components/CenteredContainer'
import { HomePage } from './HomePage'
import MuiThemeProvider from './theme/Provider'

function App() {
  return (
    <MuiThemeProvider>
      <CenteredContainer>
        <HomePage />
      </CenteredContainer>
    </MuiThemeProvider>
  )
}

export default App
