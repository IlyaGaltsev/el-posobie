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
    path: routesNames.MAIN_ROUTE,
    element: <Main />
  },
  {
    path: routesNames.BOOK_ROUTE,
    element: <BookLayout />,
    childrenRoutes: [
      {
        path: routesNames.BOOK_PAGE_ROUTE,
        element: <Book />,
        childrenRoutes: [{ path: routesNames.BOOK_PAGE_ID_ROUTE, element: <Page /> }]
      },
      { path: routesNames.VIDEO_ROUTE, element: <Videos /> },
      { path: routesNames.VIDEO_ID_ROUTE, element: <VideoItem /> },
      { path: routesNames.PREZENTATIONS_ROUTE, element: <Prezentations /> },
      { path: routesNames.PREZENTATIONS_ID_ROUTE, element: <PrezentationItem /> },
      { path: routesNames.CONSPECTS_ROUTE, element: <Conspects /> },
      { path: routesNames.CONSPECTS_ID_ROUTE, element: <ConspectItem /> }
    ]
  },
  {
    path: routesNames.ABOUT_ROUTE,
    element: <About />
  }
]
