import './styled/GoogleStyles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styled/GlobalStyle.styled'
// import { BrowserRouter } from 'react-router-dom'
import { App } from './app'
import 'antd/dist/reset.css'
import './index.css'
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle />
      <App />
    </HashRouter>
  </React.StrictMode>
)
