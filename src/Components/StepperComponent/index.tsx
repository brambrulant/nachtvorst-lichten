import * as React from 'react'
import { MobileStepper } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

import StyledButton from '../Button'
import useStyles from './useStyles'

export interface StepperComponentProps {
  steps: string[]
  getContent: (activeStep: number) => React.ReactNode
  onFinish: () => void
}

export const StepperComponent: React.FC<StepperComponentProps> = ({
  steps,
  getContent,
  onFinish,
}) => {
  const theme = useTheme()
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)

  const totalSteps = () => steps.length

  const handleNext = React.useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }, [])

  const handleBack = React.useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }, [])

  const isLastStep = () => activeStep === totalSteps() - 1

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {getContent(activeStep)}
      </div>
      <MobileStepper
        classes={{ root: classes.stepper, dotActive: classes.activeDot }}
        variant="dots"
        steps={totalSteps()}
        position="static"
        activeStep={activeStep}
        nextButton={
          <StyledButton
            className={classes.button}
            onClick={isLastStep() ? onFinish : handleNext}
          >
            {isLastStep() ? 'Finish' : 'Next'}
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </StyledButton>
        }
        backButton={
          <StyledButton
            className={classes.button}
            onClick={handleBack}
            disabled={!activeStep}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </StyledButton>
        }
      />
    </div>
  )
}

export default StepperComponent
