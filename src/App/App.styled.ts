import { BottomNavigation, Drawer } from '@mui/material'
import styled from 'styled-components'
import { device, maxContent } from '../constants/style/breakpoints'

export const App = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BottomTabNavigation = styled(BottomNavigation)`
  position: sticky;
  bottom: 0;
  width: 100%;
`

export const Body = styled.div`
  max-width: ${maxContent};
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    padding: 0px 12px;
  }
`

export const DrawerBlur = styled(Drawer)(() => ({
  backdropFilter: 'blur(5px)'
}))
