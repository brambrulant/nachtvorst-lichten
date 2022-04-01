import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

const styles = ({
  spacing, shadows, palette, typography,
}: Theme) =>
  createStyles({
    root: {
      fontFamily: typography.sourceSans.news,
      background: `${palette.nachtvorst.grayscale.darker} !important`,
      color: `${palette.nachtvorst.grayscale.lighter} !important`,
      border: '1px solid black',
      padding: spacing(4, 2),
      boxShadow: `${shadows[4]} !important`,
      minHeight: `${spacing(50)} !important`,
      width: `${spacing(80)} !important`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    dmx: {
      // margin: spacing(2, 0),
    },
    start: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pulse: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: spacing(10),
    },
  })
export default makeStyles(styles)
