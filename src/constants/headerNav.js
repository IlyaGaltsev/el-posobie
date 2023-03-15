import * as route from 'src/routesNames'
import { FaBook, FaPhotoVideo, FaVideo, FaPencilAlt } from 'react-icons/fa'

export const headerNav = [
  {
    key: route.BOOK_ROUTE,
    icon: <FaBook className="icon" />,
    label: 'Учебник'
  },
  {
    key: route.VIDEO_ROUTE,
    icon: <FaVideo className="icon" />,
    label: 'Видео'
  },
  {
    key: route.PREZENTATIONS_ROUTE,
    icon: <FaPhotoVideo className="icon" />,
    label: 'Презентации'
  },
  {
    key: route.CONSPECTS_ROUTE,
    icon: <FaPencilAlt className="icon" />,
    label: 'Конспекты'
  }
]
