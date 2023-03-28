import styled from 'styled-components'
import { Drawer, Menu } from 'antd'

export const LeftMenu = styled(Drawer)`
  .ant-collapse-content-box p {
    margin-bottom: 20px;
  }

  @media (max-width: 430px) {
    .ant-drawer-body {
      padding: 10px;
    }
  }
`
export const NavMenu = styled(Menu)`
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
`
