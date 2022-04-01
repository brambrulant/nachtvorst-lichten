import React from 'react'
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography,
} from '@mui/material'
import { Dmx } from '../stores/models/Dmx'
import StyledRadio from '../Components/Radio'

export interface SelectOutputDeviceProps {
  outputs: any[]
  onChange: (event: React.ChangeEvent) => void
}

export const SelectOutputDevice: React.FC<SelectOutputDeviceProps> = ({
  outputs,
  onChange,
}) => {
  console.log('hoooi')
  return (
    <div>
      <Typography variant="h1">Select your DMX output device</Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={onChange}
        >
          {outputs.map((output: Dmx) => (
            <FormControlLabel
              key={output?.name}
              value={output?.name}
              control={<StyledRadio />}
              label={output?.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default SelectOutputDevice
