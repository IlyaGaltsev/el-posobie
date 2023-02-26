import { Route, Routes } from "react-router-dom"
import { Header } from "../components/Header"
import { routes } from "../routes"
import "./App.scss"

const App = () => {
  return (
    <div
      id="main"
      className="app__wrapepr"
    >
      <Header />
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
    </div>
  )
}

export { App }
