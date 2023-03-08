import { headerNav } from "../../constants/headerNav"
import { MenuItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"
import * as S from "./Header.styled"
import { MdMenu } from "react-icons/md"
import { FaSearch } from "react-icons/fa"

const Header = ({ onChange, closeMenu }) => {
  const navigate = useNavigate()

  const handleCloseNavMenu = key => {
    console.log(key)
    navigate(key)
  }

  return (
    <S.Bar position="sticky">
      <S.Tool>
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
              onClick={() => handleCloseNavMenu(key)}
            >
              {icon}
              <ListItemText primary={label} />
            </S.NavItem>
          ))}
        </S.NavLinks>
        <S.Search>
          <S.SearchIconWrapper>
            <FaSearch />
          </S.SearchIconWrapper>
          <S.StyledInputBase
            placeholder="Поиск…"
            inputProps={{ "aria-label": "search" }}
          />
        </S.Search>
      </S.Tool>
    </S.Bar>
  )
}

export { Header }
