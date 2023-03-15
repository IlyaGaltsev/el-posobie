import { BookScreen } from './screens/BookScreen'
// import { ConspectScreen } from './screens/ConspectScreen'
import { PrezentationScreen } from './screens/PrezentationScreen'
import { VideoScreen } from './screens/VideoScreen'
import * as routesNames from './routesNames'
import { ConspectScreen } from 'src/screens/ConspectScreen'

export const routes = [
  {
    path: routesNames.BOOK_ROUTE,
    element: <BookScreen />
  },
  {
    path: routesNames.VIDEO_ROUTE,
    element: <VideoScreen />
  },
  {
    path: routesNames.PREZENTATIONS_ROUTE,
    element: <PrezentationScreen />
  },
  {
    path: routesNames.CONSPECTS_ROUTE,
    element: <ConspectScreen />
  }
]
