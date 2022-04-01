import { styled } from '@mui/material/styles'
import Radio from '@mui/material/Radio'
import theme from '../../theme/index'

const StyledRadio = styled(Radio)({
  ':hover': {
    color: theme.palette.nachtvorst.grayscale.base,
    shadow: 'none !important',
    backgroundColor: 'transparent',
  },
  '&.Mui-checked': {
    color: theme.palette.nachtvorst.primary.amber,
  },
})

export default StyledRadio
