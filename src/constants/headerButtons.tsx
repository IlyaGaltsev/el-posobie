import { THeaderButton } from '@/types'
import { VscPreview, VscInfo } from 'react-icons/vsc'
import { ABOUT_ROUTE, MAIN_ROUTE } from 'src/Navigation/routesNames'

export const headerButtons: THeaderButton[] = [
  {
    title: 'Титульная страница',
    to: MAIN_ROUTE,
    icon: () => (
      <VscPreview
        className="header-buttons-icon"
        size={24}
      />
    )
  },
  {
    title: 'О проекте',
    to: ABOUT_ROUTE,
    icon: () => (
      <VscInfo
        className="header-buttons-icon"
        size={24}
      />
    )
  }
]
