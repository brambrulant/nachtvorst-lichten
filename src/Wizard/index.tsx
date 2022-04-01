import React from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import { Input } from 'webmidi'
import Card from '@mui/material/Card'

import { Skeleton, Typography } from '@mui/material'
import SelectInputDevice from '../Midi/SelectInputDevice'

import useStyles from './useStyles'
import StepperComponent from '../Components/StepperComponent'
import SelectOutputDevice from '../Dmx/SelectOutputDevice'

// adjust this to add more steps!
const steps = [
  'Select your Midi input device',
  'Select your DMX output device',
  'More configuration',
]

export interface WizardProps {
  inputs: Input[]
}

export const Wizard: React.FC<WizardProps> = ({ inputs }) => {
  const classes = useStyles()
  const navigate = useNavigate()

  const handleFinish = React.useCallback((e) => {
    e.preventDefault()
    navigate('/app')
  }, [])

  const getContent = (activeStep: number) => {
    switch (activeStep) {
      case 0:
        return (
          <div className={classes.start}>
            <Typography variant="h1">Start Configuration</Typography>
            <Skeleton variant="circular" width={100} height={100} animation="pulse" className={classes.pulse} />
          </div>)
      case 1:
        return <SelectInputDevice inputs={inputs} />
      case 2:
        return (
          <SelectOutputDevice
            onChange={() => console.log('DMX selected')}
            outputs={[{ name: 'DMXOUTPUT HARDCODED' }]}
          />
        )
      case 3:
        return <div>more configuration</div>
      default:
        return 'unknown step'
    }
  }

  return (
    <Card classes={{ root: classes.root }}>
      <StepperComponent
        getContent={getContent}
        steps={steps}
        onFinish={handleFinish}
      />
    </Card>
  )
}

export default observer(Wizard)
