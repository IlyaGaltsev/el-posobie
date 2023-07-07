import { AppBar, IconButton, Toolbar } from '@mui/material'
import { MdClose } from 'react-icons/md'
import * as styles from './styles'

const Header = ({ title, onClose }: any) => {
  return (
    <AppBar sx={styles.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <MdClose />
        </IconButton>
        <h3>{title}</h3>
      </Toolbar>
    </AppBar>
  )
}

export default Header
