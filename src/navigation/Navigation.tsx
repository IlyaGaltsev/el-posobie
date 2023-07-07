import { Route, Routes } from 'react-router-dom'
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

const Navigation = () => {
  return (
    <Routes>
      <Route path={routesNames.MAIN_ROUTE} element={<Main />}/>
      <Route path={routesNames.ABOUT_ROUTE} element={<About />}/>
      <Route path={routesNames.BOOK_ROUTE} element={<BookLayout />}>

        <Route path={routesNames.BOOK_PAGE_ROUTE} element={<Book />}>
          <Route path={routesNames.BOOK_PAGE_ID_ROUTE} element={<Page />}/>
        </Route>

        <Route path={routesNames.VIDEO_ROUTE} element={<Videos />}/>
        <Route path={routesNames.VIDEO_ID_ROUTE} element={<VideoItem />}/>

        <Route path={routesNames.PREZENTATIONS_ROUTE} element={<Prezentations />}/>
        <Route path={routesNames.PREZENTATIONS_ID_ROUTE} element={<PrezentationItem />}/>

        <Route path={routesNames.CONSPECTS_ROUTE} element={<Conspects />}/>
        <Route path={routesNames.CONSPECTS_ID_ROUTE} element={<ConspectItem />}/>

      </Route>
      <Route path='*' element={<Main />}/>
    </Routes>
  )
}

export default Navigation
