import { THeaderNavigation } from '@/types'
import * as route from './routesNames'

export const headerNavigation: THeaderNavigation[] = [
  {
    path: route.BOOK_PAGE_ROUTE,
    label: 'Учебник'
  },
  {
    path: route.VIDEO_ROUTE,
    label: 'Видео'
  },
  {
    path: route.PREZENTATIONS_ROUTE,
    label: 'Презентации'
  },
  {
    path: route.CONSPECTS_ROUTE,
    label: 'Конспекты'
  }
]
