import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

const styles = ({
  palette, typography, shadows, spacing,
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    radioChecked: {
      background: `${palette.nachtvorst.grayscale.darker} !important`,
    },
  })

export default makeStyles(styles)
