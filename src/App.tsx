import React from 'react'
import { WebMidi, Input } from 'webmidi'

import CenteredContainer from './Components/CenteredContainer'
import { Wizard } from './Wizard'
import MuiThemeProvider from './theme/Provider'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const onEnabled = () => {}

WebMidi.enable()
  .then(onEnabled)
  .catch((err) => alert(err))

function App() {
  return (
    <MuiThemeProvider>
      <CenteredContainer>
        <Wizard inputs={WebMidi.inputs} />
      </CenteredContainer>
    </MuiThemeProvider>
  )
}

export default App
