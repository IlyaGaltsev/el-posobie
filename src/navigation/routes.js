import * as routesNames from './routesNames'
import { Book as BookLayout } from 'src/layouts/Book'

import Main from 'src/pages/Main'
import About from 'src/pages/About'

import Book from 'src/pages/Book'
import Page from 'src/pages/Book/Page'

import Videos from 'src/pages/Videos'
import VideoItem from 'src/pages/Videos/VideoItem'

import Prezentations from 'src/pages/Prezentations'
import PrezentationItem from 'src/pages/Prezentations/PrezentationItem'

import Conspects from 'src/pages/Conspects'
import ConspectItem from 'src/pages/Conspects/ConspectItem'

/**
 * @максимальная вложенность = 3, в конечном итоге придется избавиться от этого массива из-за внешки App.tsx
 */

export const routes = [
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/book',
    element: <BookLayout />,
    childrenRoutes: [
      {
        path: '/book/content',
        element: <Book />,
        childrenRoutes: [{ path: '/book/content/:id', element: <Page /> }]
      },
      { path: '/book/videos', element: <Videos /> },
      { path: '/book/videos/:id', element: <VideoItem /> },
      { path: '/book/prezentations', element: <Prezentations /> },
      { path: '/book/prezentations/:id', element: <PrezentationItem /> },
      { path: '/book/abstract', element: <Conspects /> },
      { path: '/book/abstract/:id', element: <ConspectItem /> }
    ]
  },
  {
    path: '/about',
    element: <About />
  }
]
