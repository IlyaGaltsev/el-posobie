import { themeConfig } from 'src/utils/config/themeConfig'
import { Route, Routes } from 'react-router-dom'
import { routes } from 'src/navigation/routes'
import { ConfigProvider } from 'antd'
import { FC } from 'react'

import './App.scss'

const App: FC = () => {
  return (
    <ConfigProvider theme={themeConfig}>
      <div className="app-wrapper">
        <Routes>
          {routes.map(({ path, element, childrenRoutes }) => {
            return (
              <Route
                key={path}
                path={path}
                element={element}
              >
                {childrenRoutes
                  ? childrenRoutes.map(
                      ({
                        path: childernPath,
                        element: chidrenElement,
                        childrenRoutes: childrenRoutesChilder
                      }) => {
                        return (
                          <Route
                            key={childernPath}
                            path={childernPath}
                            element={chidrenElement}
                          >
                            {childrenRoutesChilder
                              ? childrenRoutesChilder.map(
                                  ({
                                    path: childernPathChildren,
                                    element: chidrenElementChildren
                                  }) => {
                                    return (
                                      <Route
                                        key={childernPathChildren}
                                        path={childernPathChildren}
                                        element={chidrenElementChildren}
                                      />
                                    )
                                  }
                                )
                              : null}
                          </Route>
                        )
                      }
                    )
                  : null}
              </Route>
            )
          })}
        </Routes>
      </div>
    </ConfigProvider>
  )
}

export default App
