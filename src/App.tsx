import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

import { WebMidi, Input } from 'webmidi'

import CenteredContainer from './Components/CenteredContainer'
import { Wizard } from './Wizard'
import MuiThemeProvider from './theme/Provider'
import HomePage from './HomePage'

// eslint-disable-next-line @typescript-eslint/no-empty-function
// const onEnabled = () => {}

WebMidi.enable()
  .catch((err) => alert(err))

function App() {
  return (
    <MuiThemeProvider>
      <CenteredContainer>
        <Routes>
          <Route path="/" element={<Wizard inputs={WebMidi.inputs} />} />
          <Route path="/app" element={<HomePage />} />
        </Routes>
      </CenteredContainer>
    </MuiThemeProvider>
  )
}

export default App
