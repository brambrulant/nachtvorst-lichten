import React from 'react'
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { Dmx } from '../stores/models/Dmx'

export interface SelectInputDeviceProps {
  outputs: any[]
  onChange: (event: React.ChangeEvent) => void
}

export const SelectInputDevice: React.FC<SelectInputDeviceProps> = ({
  outputs,
  onChange,
}) => {
  console.log('hoooi')
  return (
    <div>
      <Typography variant="h5">Select your DMX output device</Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={onChange}
        >
          {outputs.map((output: Dmx) => (
            <FormControlLabel
              value={output?.name}
              control={<Radio />}
              label={output?.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default SelectInputDevice
