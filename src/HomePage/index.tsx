import React from 'react'
import { Note, WebMidi } from 'webmidi'

import Card from '@mui/material/Card'
import useStyles from './useStyles'
import { useStore } from '../stores'

export const HomePage: React.FC = () => {
  const classes = useStyles()

  const { currentMidi } = useStore()

  const [note, setNote] = React.useState<Note>()
  const [channel, setChannel] = React.useState<number>()

  const midiMessage = (): React.ReactElement | void => {
    if (currentMidi.length) {
      currentMidi[0].addListener('noteon', (e) => {
        setNote(e.note)
        setChannel(e.channel)
      })
    }
  }

  midiMessage()

  return (
    <Card className={classes.root}>
      note:
      {note?.name}
      {note?.octave}
    </Card>
  )
}

export default HomePage
