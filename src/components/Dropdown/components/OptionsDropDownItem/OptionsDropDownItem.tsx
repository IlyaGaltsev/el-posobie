import { BOOK_PAGE_ROUTE } from 'src/navigation/routesNames'
import { TOptionDropDownItem } from 'src/types'
import { NavLink } from 'react-router-dom'

const OptionsDropDownItem = ({ option }: TOptionDropDownItem) => {
  return (
    <li className="dropdown__option">
      <NavLink to={`${BOOK_PAGE_ROUTE}/${option.key}`}>{option.label}</NavLink>
    </li>
  )
}

export default OptionsDropDownItem
