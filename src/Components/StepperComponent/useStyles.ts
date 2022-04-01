import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

const styles = ({ palette, spacing, typography }: Theme) =>
  createStyles({
    root: {
      minHeight: `${spacing(50)} !important`,
      padding: spacing(2),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: typography.sourceSans.news,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    stepper: {
      background: `${palette.nachtvorst.grayscale.darker} !important`,
      marginBottom: 0,
    },
    activeDot: {
      background: `${palette.nachtvorst.primary.amber} !important`,
    },
    button: {
      width: spacing(10),
    },
  })
export default makeStyles(styles)
