import {
  BottomNavigationAction,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { colors } from '../constants/style/colors'
import { headerNav } from '../constants/headerNav'
import { Header } from '../components/Header'
import { ConfigProvider } from 'antd'
import { routes } from '../routes'
import * as S from './App.styled'
import { Box } from '@mui/system'
import { useState } from 'react'

const App = () => {
  const navigate = useNavigate()
  const [openNavMenu, setOpenNavMenu] = useState(false)
  const [value, setValue] = useState(0)
  const onChange = (key: string) => {
    navigate(key)
  }
  const closeMenu = () => {
    setOpenNavMenu(true)
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primaryColor
        }
      }}
    >
      <S.App id="main">
        <Header closeMenu={closeMenu} />
        <S.Body id="sbody">
          <S.DrawerBlur
            container={document.getElementById('sbody')}
            anchor={'left'}
            open={openNavMenu}
            onClose={() => {
              setOpenNavMenu(false)
            }}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => {
                setOpenNavMenu(false)
              }}
            >
              <List>
                {headerNav.map(({ key, icon, label }) => (
                  <ListItem key={key} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        onChange(key)
                      }}
                    >
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </S.DrawerBlur>
          <Routes>
            {routes.map(route => {
              return <Route key={route.path} {...route} />
            })}
          </Routes>
        </S.Body>
        {window.innerWidth < 500 && (
          <S.BottomTabNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
          >
            {headerNav.map(({ key, label, icon }) => {
              return <BottomNavigationAction key={key} label={label} icon={icon} />
            })}
          </S.BottomTabNavigation>
        )}
      </S.App>
    </ConfigProvider>
  )
}

export { App }
