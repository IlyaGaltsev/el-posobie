import { BOOK_PAGE_ROUTE } from 'src/Navigation/routesNames'
import { TSidebarButton } from '@/types'
import { NavLink } from 'react-router-dom'

const SidebarButton = ({ id, label }: TSidebarButton) => {
  return (
    <NavLink
      className="sidebar-wrapper-navlink"
      to={`${BOOK_PAGE_ROUTE}/${id}`}
    >
      {label}
    </NavLink>
  )
}

export default SidebarButton
