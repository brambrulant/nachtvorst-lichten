import * as React from 'react'
import { Input, WebMidi } from 'webmidi'
import { observer } from 'mobx-react'
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography,
} from '@mui/material'
import StyledRadio from '../Components/Radio'
import useStyles from './useStyles'
import { useStore } from '../stores'

export interface selectInputDeviceProps {
  inputs: Input[]
}

export const SelectInputDevice: React.FC<selectInputDeviceProps> = ({
  inputs,
}) => {
  const classes = useStyles()
  const { setCurrentMidi } = useStore()

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const midiInput = inputs?.find((input) => input.name === e.target.value)
      if (midiInput !== undefined) setCurrentMidi(midiInput)
    },
    [],
  )

  return (
    <div className={classes.root}>
      <Typography variant="h2">Select your MIDI input device</Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={handleChange}
        >
          {inputs.map((input) => (
            <FormControlLabel
              key={input.name}
              value={input.name}
              control={<StyledRadio />}
              label={input.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default observer(SelectInputDevice)
