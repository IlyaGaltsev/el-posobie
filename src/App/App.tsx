import { FC } from 'react'
import Navigation from 'src/Navigation'

import './App.scss'

const App: FC = () => {
  return (
    <div className="app-wrapper">
      <Navigation/>
      {/* <Routes>
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
      </Routes> */}
    </div>
  )
}

export default App
