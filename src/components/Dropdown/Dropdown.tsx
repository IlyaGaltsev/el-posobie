import { BOOK_ROUTE } from 'src/routesNames'
import { NavLink } from 'react-router-dom'
import './Dropdown.scss'
import type { INavBookChildren } from 'src/constants/navBook'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

interface IDropdown {
  id?: number
  label: string
  isOpen: boolean
  options: INavBookChildren[]
  onClick: Function
}

const Dropdown = ({ id, label, options, isOpen, onClick }: IDropdown) => {
  return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={() => onClick(id)}>
        {isOpen ? (
          <AiOutlinePlus className="dropdown__header-icon" />
        ) : (
          <AiOutlineMinus className="dropdown__header-icon" />
        )}
        {label}
        <i className={`fa fa-caret-${isOpen ? 'up' : 'down'}`}></i>
      </div>
      {isOpen && (
        <ul className="dropdown__options">
          {options?.map(option => (
            <li key={option.key} className="dropdown__option">
              <NavLink to={`${BOOK_ROUTE}/${option.key}`}>{option.label}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { Dropdown }
