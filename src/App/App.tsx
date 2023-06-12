import { Route, Routes, useNavigate } from 'react-router-dom'
import { colors } from '../constants/style/colors'
import { ConfigProvider } from 'antd'
import './App.scss'
import { useLayoutEffect, useState } from 'react'
import { fontSizes } from 'src/constants/fontSizes'
import { AppContext } from 'src/context/AppContext'
import { BookScreen } from 'src/screens/BookScreen'
import { Book } from 'src/layouts/Book'
import { FirstScreen } from 'src/screens/FirstScreen'
import { PageBook } from 'src/screens/PageBook'
import { VideoScreen } from 'src/screens/VideoScreen'
import { PrezentationScreen } from 'src/screens/PrezentationScreen'
import ConspectScreen from 'src/screens/ConspectScreen'
import { PageVideo } from 'src/screens/PageVideo'
import { PagePrezentation } from 'src/screens/PagePrezentation'
import { Conspect } from 'src/screens/ConspectScreen/Conspect'

const App = () => {
  const navigate = useNavigate()
  const [fontSizeTheme, setFontSizeTheme] = useState(fontSizes[0])

  useLayoutEffect(() => {
    const fontSizeThemeLocal = localStorage.getItem('fontSizeTheme')

    if (fontSizeThemeLocal != null) {
      setFontSizeTheme(fontSizeThemeLocal)
    }
  }, [fontSizeTheme])

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
                <Route index path="/book/content/:id" element={<PageBook />} />
              </Route>

              <Route path="/book/videos" element={<VideoScreen />}/>
              <Route path="/book/videos/:id" element={<PageVideo/>} />

              <Route path="/book/prezentations" element={<PrezentationScreen />} />
              <Route path="/book/prezentations/:id" element={<PagePrezentation/>} />


              <Route path="/book/abstract" element={<ConspectScreen />} />
              <Route path="/book/abstract/:id" element={<Conspect/>} />

            </Route>
          </Routes>
        </div>
      </ConfigProvider>
    </AppContext.Provider>
  )
}

export { App }
