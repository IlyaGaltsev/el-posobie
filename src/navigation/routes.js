import * as routesNames from './routesNames'
import { Book as BookLayout } from '../layouts/Book'

import Main from '../pages/Main'
import About from '../pages/About'

import Book from '../pages/Book'
import Page from '../pages/Book/Page'

import Videos from 'src/pages/Videos'
import VideoItem from 'src/pages/Videos/VideoItem'

import Prezentations from 'src/pages/Prezentations'
import PrezentationItem from 'src/pages/Prezentations/PrezentationItem'

import Conspects from 'src/pages/Conspects'
import ConspectItem from 'src/pages/Conspects/ConspectItem'

export const routes = [
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/book',
    element: <BookLayout />,
    childrenRoutes: [
      { path: '/book/content', element: <Book /> },
      { path: '/book/content/:id', element: <Page /> },
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
