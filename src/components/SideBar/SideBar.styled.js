import styled from "styled-components"
import { Drawer, Menu } from "antd"

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
