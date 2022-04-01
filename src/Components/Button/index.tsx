import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import theme from '../../theme/index'

const StyledButton = styled(Button)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.nachtvorst.primary.amber,
  fontSize: '16px',
  backgroundColor: `${theme.palette.nachtvorst.grayscale.black} !important`,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  ':hover': {
    backgroundColor: `${theme.palette.nachtvorst.grayscale.theBeast} !important`,
  },
  ':disabled': {
    color: theme.palette.nachtvorst.grayscale.base,
  },
})

export default StyledButton
