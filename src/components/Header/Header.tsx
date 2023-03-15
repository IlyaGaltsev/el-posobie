import { headerNav } from '../../constants/headerNav'
import { useNavigate } from 'react-router-dom'
import { ListItemText } from '@mui/material'
import { MdMenu } from 'react-icons/md'
import * as S from './Header.styled'

interface IHeader {
  closeMenu: () => void
}

const Header = ({ closeMenu }: IHeader) => {
  const navigate = useNavigate()

  const handleCloseNavMenu = (key: string) => {
    navigate(key)
  }

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
      </S.Tool>
    </S.Bar>
  )
}

export { Header }
