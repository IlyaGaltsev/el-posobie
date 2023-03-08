import { headerNav } from "../../constants/headerNav"
import { useNavigate } from "react-router-dom"
import { ListItemText } from "@mui/material"
import { FaSearch } from "react-icons/fa"
import { MdMenu } from "react-icons/md"
import * as S from "./Header.styled"

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
