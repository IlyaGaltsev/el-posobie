import { Button, Menu } from "antd"
import styled from "styled-components"
import { device } from "../../constants/style/breakpoints"
import { backgroundColor, primaryColor } from "../../constants/style/colors"

export const ToolBar = styled.div`
  width: 100%;
  position: sticky;
  top: 46px;
  padding: 8px 0;
`

export const Row = styled.div`
  display: flex;
  width: 100%;
`

export const MenuButton = styled(Button)`
  display: none;
  align-items: center;
  justifycontent: center;

  @media ${device.laptopS} {
    display: flex;
  }
`

export const ButtonUp = styled.div`
  position: fixed;
  bottom: 0;
  background: ${primaryColor};
  color: white;
  align-self: flex-end;
  padding: 20px;
  border-radius: 8px 8px 0 0;
  cursor: pointer;

  &:hover {
  }

  &:active {
  }
`


export const NavMenu = styled(Menu)`
  max-width: 300px;
  width: 100%;
  background: white;
  margin-right: 20px;
  position: sticky;
  top: 60px;
  max-height: calc(100vh - 46px);
  overflow-y: auto; 

  li {
    width: 300px;
  }

  @media ${device.laptopS} {
    display: none;
  }

  .ant-menu-item {
    white-space: normal;
    height: auto;
    line-height: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .ant-menu-title-content {
    text-overflow: initial;
  }
`
