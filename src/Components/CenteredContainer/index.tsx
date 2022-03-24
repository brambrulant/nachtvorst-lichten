import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'

const CenteredContainer = styled(Container)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export default CenteredContainer
