import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { colors } from '../constants/style/colors'
import { Header } from '../components/Header'
import { ConfigProvider } from 'antd'
import { routes } from '../routes'
import './App.scss'
import { Box } from '@mui/system'
import { useLayoutEffect, useState } from 'react'
import { fontSizes } from 'src/constants/fontSizes'
import { AppContext } from 'src/context/AppContext'
import { BookScreen } from 'src/screens/BookScreen'
import { Book } from 'src/layouts/Book'
import { FirstScreen } from 'src/screens/FirstScreen'
import { PageBook } from 'src/screens/PageBook'

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
        <div className="app-wrapper">
          <Routes>
            <Route path="/" element={<FirstScreen />} />
            <Route path="/book" element={<Book />}>
              <Route path="/book/content" element={<BookScreen />}>
                <Route index path="/book/content/:id" element={<PageBook/>} />
              </Route>

              <Route path="/book/videos" element={<h1>Видео</h1>} />
              <Route path="/book/prezentations" element={<h1>Презентации</h1>} />
              <Route path="/book/abstract" element={<h1>Конспекты</h1>} />
            </Route>
          </Routes>
        </div>
      </ConfigProvider>
    </AppContext.Provider>
  )
}

export { App }
