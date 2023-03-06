import { Route, Routes, useNavigate } from "react-router-dom"
import { primaryColor } from "../constants/style/colors"
import { Header } from "../components/Header"
import { ConfigProvider } from "antd"
import { routes } from "../routes"
import * as S from "./App.styled"

const App = () => {
  const navigate = useNavigate()

  const onChange = ({ key }) => {
    navigate(key)
  }

  return (
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
  )
}

export { App }
