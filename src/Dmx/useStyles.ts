import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

const styles = ({ palette, typography }: Theme) =>
  createStyles({
    root: {
      fontFamily: typography.sourceSans.news,
    },
    radioChecked: {
      background: `${palette.nachtvorst.grayscale.darker} !important`,
    },
  })

export default makeStyles(styles)
