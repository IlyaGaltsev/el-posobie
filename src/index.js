import { GlobalStyle } from "./styled/GlobalStyle.styled"
import reportWebVitals from "./reportWebVitals"
import { HashRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import "antd/dist/reset.css"
import { App } from "./App"
import React from "react"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle/>
      <App />
    </HashRouter>
  </React.StrictMode>
)

reportWebVitals()
