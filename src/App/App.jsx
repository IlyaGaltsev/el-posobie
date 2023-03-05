import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { Header } from "../components/Header"
import { routes } from "../routes"
import { ConfigProvider } from "antd"
import * as S from "./App.styled"
import { AppContext } from "../context/AppContext"
import { MdArrowBackIosNew } from "react-icons/md"
import { primaryColor } from "../constants/style/colors"

const App = () => {
  const navigate = useNavigate()

  const onChange = ({ key }) => {
    navigate(key)
  }
  let defaultValue = "light"
  let localtheme = localStorage.getItem("theme")

  if (localtheme) {
    defaultValue = localtheme
    console.log(`localTheme ${localtheme}`)
  }

  const [theme, setTheme] = useState(defaultValue)

  useEffect(() => {}, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: primaryColor

            // colorBgMask: "rgba(0,0,0,0.4)",
            // colorBgElevated: "#262628",
            // colorBgLayout: "#161618"
          }
        }}
      >
        <S.App id="main">
          <Header onChange={onChange} />

          <S.Body>
            <Routes>
              {routes.map(route => {
                return (
                  <Route
                    key={route.path}
                    {...route}
                  />
                )
              })}
            </Routes>
          </S.Body>
        </S.App>
      </ConfigProvider>
    </AppContext.Provider>
  )
}

export { App }
