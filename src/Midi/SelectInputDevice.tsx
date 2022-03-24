import React from 'react'

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { Input } from 'webmidi'

export interface SelectInputDeviceProps {
  inputs: Input[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SelectInputDevice: React.FC<SelectInputDeviceProps> = ({
  inputs,
  onChange,
}) => (
  <div>
    <Typography variant="h5">Select your MIDI input device</Typography>
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        onChange={onChange}
      >
        {inputs.map((input) => (
          <FormControlLabel
            key={input.name}
            value={input.name}
            control={<Radio />}
            label={input.name}
          />
        ))}
        <FormControlLabel
          value="midi hardcoded"
          control={<Radio />}
          label="midi hardcoded"
        />
      </RadioGroup>
    </FormControl>
  </div>
)

export default SelectInputDevice
