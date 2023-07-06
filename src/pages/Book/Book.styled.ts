import { Button, Menu } from 'antd'
import styled from 'styled-components'
import { colors } from '../../constants/style/colors'
import { Fab } from '@mui/material'

export const ToolBar = styled.div`
  width: 100%;
  position: sticky;
  top: 46px;
  padding: 8px 0;
  z-index: 2;
`

export const Row = styled.div`
  display: flex;
  width: 100%;
`

export const MenuButton = styled(Button)`
  display: none;
  align-items: center;
  justifycontent: center;

  @media (max-width: 1277px) {
    display: flex;
  }
`

export const ButtonUp = styled(Fab)`
  position: fixed;
  bottom: 20;
  background: ${colors.primaryColor};
  color: white;
  align-self: flex-end;
  cursor: pointer;
`

export const NavMenu = styled(Menu)`
  max-width: 300px;
  min-width: 300px;
  width: 100%;
  background: white;
  margin-right: 20px;
  position: sticky;
  top: 64px;
  max-height: calc(100vh - 46px);
  overflow-y: auto;

  li {
    width: 300px;
  }

  .ant-menu-title-content {
    color: #3a3a3a;
    font-size: 18px;
  }
  .ant-menu-item-selected {
    background: #556832;

    .ant-menu-title-content {
      color: white;
    }
  }

  .ant-menu-submenu-title,
  .ant-menu-item {
    white-space: normal;
    max-height: 180px !important;
    height: auto !important;
    line-height: 24px !important;
    padding-top: 8px;
    padding-bottom: 8px;
    align-items: flex-start;
  }

  .ant-menu-title-content {
    text-overflow: initial;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 1277px) {
    display: none;
  }
`
