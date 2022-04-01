import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import theme from '../../theme/index'

const CenteredContainer = styled(Container)({
  backgroundColor: theme.palette.nachtvorst.background,
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export default CenteredContainer
