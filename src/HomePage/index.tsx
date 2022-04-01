import React from 'react'

import Card from '@mui/material/Card'
import CircleIcon from '@mui/icons-material/Circle'
import useStyles from './useStyles'
import { useStore } from '../stores'

interface light {
  note: string
  vel: number
}

const initialState = [
  { note: 'C', vel: 0.1 },
  { note: 'D', vel: 0.1 },
  { note: 'E', vel: 0.1 },
  { note: 'F', vel: 0.1 },
  { note: 'G', vel: 0.1 },
  { note: 'A', vel: 0.1 },
  { note: 'B', vel: 0.1 },
]

// This "works" but is really slow, and crashes every time after a few seconds.
// Might be something with the combination of midilistener and react useState,
// that's causing infinite rendering?

export const HomePage: React.FC = () => {
  const classes = useStyles()

  const { currentMidi } = useStore()

  const [lights, setLights] = React.useState<light[]>(initialState)

  if (currentMidi.length) {
    currentMidi[0].addListener('noteon', (e) => {
      const newArray = lights.map((n) => {
        if (n.note === e.note.name) {
          // eslint-disable-next-line no-return-assign,no-param-reassign
          return { note: n.note, vel: e.note.attack }
        }
        return { note: n.note, vel: n.vel }
      })
      setLights(newArray)
    })
    currentMidi[0].addListener('noteoff', (e) => {
      const newArray = lights.map((n) => {
        if (n.note === e.note.name) {
          // eslint-disable-next-line no-return-assign,no-param-reassign
          return { note: n.note, vel: 0.1 }
        }
        return { note: n.note, vel: n.vel }
      })
      setLights(newArray)
    })
  }

  return (
    <Card className={classes.root}>
      {lights.map((light) => (
        <div key={light.note} className={classes.lights}>
          <p>{light.note}</p>
          <CircleIcon color="warning" style={{ opacity: light.vel }} />
        </div>))}
    </Card>
  )
}

export default HomePage
