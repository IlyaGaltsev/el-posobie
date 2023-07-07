import { THeaderNavigation } from '@/types'
import * as route from './routesNames'

export const headerNavigation: THeaderNavigation[] = [
  {
    key: route.BOOK_PAGE_ROUTE,
    label: 'Учебник'
  },
  {
    key: route.VIDEO_ROUTE,
    label: 'Видео'
  },
  {
    key: route.PREZENTATIONS_ROUTE,
    label: 'Презентации'
  },
  {
    key: route.CONSPECTS_ROUTE,
    label: 'Конспекты'
  }
]
