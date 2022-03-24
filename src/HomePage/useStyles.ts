import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

const styles = ({ palette, spacing, shadows }: Theme) => createStyles({
  root: {
    border: '1px solid black',
    padding: spacing(2),
    boxShadow: `${shadows[4]} !important`,
    minHeight: `${spacing(50)} !important`,
    width: `${spacing(50)} !important`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  midi: {
    margin: spacing(2, 0),
  },
  dmx: {
    margin: spacing(2, 0),
  },
  buttonGroup: {
    alignSelf: 'flex-end',
  },
  button: {
    margin: `${spacing(2, 0)} !important`,
  },
  backButton: {
    color: `${palette.nachtvorst.grayscale.black} !important`,
    backgroundColor: `${palette.common.white} !important`,
    margin: `${spacing(2, 0, 2, 2)} !important`,
    '&:hover': {
      backgroundColor: `${palette.nachtvorst.grayscale.purgatory} !important`,
    },
  },
})
export default makeStyles(styles)
