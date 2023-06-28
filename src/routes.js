import { PrezentationScreen } from './screens/PrezentationScreen'
import { VideoScreen } from './screens/VideoScreen'

import ConspectScreen from './screens/ConspectScreen'
import { FirstScreen } from './screens/FirstScreen'
import { BookScreen } from './screens/BookScreen'
import * as routesNames from './routesNames'

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
]
