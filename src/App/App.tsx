import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { colors } from '../constants/style/colors'
import { headerNav } from '../constants/headerNav'
import { Header } from '../components/Header'
import { ConfigProvider } from 'antd'
import { routes } from '../routes'
import * as S from './App.styled'
import { Box } from '@mui/system'
import { useLayoutEffect, useState } from 'react'
import { fontSizes } from 'src/constants/fontSizes'
import { AppContext } from 'src/context/AppContext'

const App = () => {
  const navigate = useNavigate()
  const [openNavMenu, setOpenNavMenu] = useState(false)
  const [fontSizeTheme, setFontSizeTheme] = useState(fontSizes[0])

  useLayoutEffect(() => {
    const fontSizeThemeLocal = localStorage.getItem('fontSizeTheme')

    if (fontSizeThemeLocal != null) {
      setFontSizeTheme(fontSizeThemeLocal)
    }
  }, [fontSizeTheme])

  const onChange = (key: string) => {
    navigate(key)
  }
  const closeMenu = () => {
    setOpenNavMenu(true)
  }

  return (
    <AppContext.Provider value={{ fontSizeTheme }}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: colors.primaryColor
          }
        }}
      >
        <S.App id="main">
          <Header closeMenu={closeMenu} setFontSizeTheme={setFontSizeTheme} />
          <div id="boxtop" />
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
        </S.App>
      </ConfigProvider>
    </AppContext.Provider>
  )
}

export { App }
