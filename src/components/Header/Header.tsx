/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import { headerNav } from '../../constants/headerNav'
import { useNavigate } from 'react-router-dom'
import { ListItemText } from '@mui/material'
import { MdMenu } from 'react-icons/md'
import * as S from './Header.styled'

import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import * as React from 'react'
import { FaEye } from 'react-icons/fa'
import { fontSizes } from 'src/constants/fontSizes'

interface IHeader {
  closeMenu: () => void
  setFontSizeTheme: any
}

const Header = ({ closeMenu, setFontSizeTheme }: IHeader) => {
  const navigate = useNavigate()

  const handleCloseNavMenu = (key: string) => {
    navigate(key)
  }

  const setFontSize = (font: string) => {
    setFontSizeTheme(font)
    localStorage.setItem('fontSizeTheme', font)
  }

  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current != null && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <S.Bar position="sticky">
      <S.Tool variant="dense">
        <S.MenuButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 0 }}
          onClick={closeMenu}
        >
          <MdMenu />
        </S.MenuButton>
        <S.NavLinks>
          {headerNav.map(({ key, label, icon }) => (
            <S.NavItem
              key={key}
              onClick={() => {
                handleCloseNavMenu(key)
              }}
            >
              {icon}
              <ListItemText primary={label} />
            </S.NavItem>
          ))}
        </S.NavLinks>

        <Button
          ref={anchorRef}
          style={{
            color: 'white'
          }}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <FaEye size={24} />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      onClick={() => {
                        setFontSize(fontSizes[0])
                      }}
                    >
                      Обычный шрифт
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setFontSize(fontSizes[1])
                      }}
                    >
                      Крупный шрифт
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </S.Tool>
    </S.Bar>
  )
}

export { Header }
