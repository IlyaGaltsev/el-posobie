import { BookScreen } from './screens/BookScreen'
import { PrezentationScreen } from './screens/PrezentationScreen'
import { VideoScreen } from './screens/VideoScreen'
import * as routesNames from './routesNames'
import ConspectScreen from './screens/ConspectScreen'
import { FirstScreen } from './screens/FirstScreen'
// import { ConspectScreen } from './screens/ConspectScreen'

export const routes = [
  {
    path: routesNames.FIRST_ROUTE,
    element: <FirstScreen />
  },
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
  // ,
  // {
  //   path: routesNames.CONSPECTS_ROUTE,
  //   element: <ConspectScreen />
  // }
]
