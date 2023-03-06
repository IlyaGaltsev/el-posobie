import { maxContent } from "../../constants/style/breakpoints"
import { colors } from "../../constants/style/colors"
import { AiFillEye } from "react-icons/ai"
import styled from "styled-components"
import { Menu } from "antd"

export const Header = styled.header`
  color: green;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${colors.secondaryColor};
  position: sticky;
  top: 0;
  z-index: 2;
`

export const Body = styled.div`
  padding: 0 20px;
  max-width: ${maxContent};
  width: 100%;
  color: green;
  display: flex;
  align-items: center;
`

export const NavMenu = styled(Menu)`
  width: 100%;

  .ant-menu-submenu-selected {
    border-radius: 8px;
  }
`

export const Iconeye = styled(AiFillEye)`
  margin-right: 20px;
  cursor: pointer;
`
