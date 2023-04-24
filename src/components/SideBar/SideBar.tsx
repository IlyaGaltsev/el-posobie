import { BOOK_ROUTE } from 'src/routesNames'
import { NavLink } from 'react-router-dom'
import { navBook } from 'src/constants/navBook'
import { Dropdown } from '../Dropdown'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        {navBook.map(({ key, label, children }: any) => {
          if (!children?.length) return <NavLink key={key} className="sidebar-wrapper-navlink" to={`${BOOK_ROUTE}/${key}`}>{label}</NavLink>

          return <Dropdown key={key} label={label} options={children} />
        })}
      </div>
    </div>
  )
}

export { Sidebar }
