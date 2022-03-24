import React from 'react'
import { observer } from 'mobx-react'
import Card from '@mui/material/Card'

import Midi from '../Midi'
import StyledButton from '../Components/Button'

import useStyles from './useStyles'
import Dmx from '../Dmx'

export const HomePage: React.FC = () => {
  const classes = useStyles()

  const [step, setStep] = React.useState(1)
  const [content, setContent] = React.useState<React.ReactElement>()

  const handleNext = React.useCallback(() => {
    if (step < 4) setStep((prevState) => prevState + 1)
  }, [])

  const handleBack = React.useCallback(() => {
    if (step > 0) setStep((prevState) => prevState - 1)
  }, [])

  const handleFinish = React.useCallback(() => {
    console.log('finish')
  }, [])

  React.useEffect(() => {
    switch (step) {
      case 1:
        setContent(<Midi className={classes.midi} />)
        break
      case 2:
        setContent(
          <Dmx
            onChange={() => console.log('jaa toch')}
            className={classes.dmx}
          />,
        )
        break
      case 3:
        setContent(<div>All done!</div>)
        break
      default:
    }
  }, [step])

  return (
    <Card className={classes.root}>
      {content}
      <div className={classes.buttonGroup}>
        <StyledButton
          className={classes.button}
          onClick={step === 3 ? handleFinish : handleNext}
        >
          {step === 3 ? 'finish' : 'next'}
        </StyledButton>
        <StyledButton
          className={classes.backButton}
          onClick={handleBack}
          disabled={step === 1}
        >
          Back
        </StyledButton>
      </div>
    </Card>
  )
}

export default observer(HomePage)
