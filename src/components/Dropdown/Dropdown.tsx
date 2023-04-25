import { BOOK_ROUTE } from 'src/routesNames'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Dropdown.scss'
import type { INavBookChildren } from 'src/constants/navBook'

interface IDropdown {
  id?: number
  label: string
  options: INavBookChildren[],
  defaultOpen: boolean
}

const Dropdown = ({ label, options, defaultOpen }: IDropdown) => {
  console.log('defaultOpen', defaultOpen)
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false)

  return (
    <div className="dropdown">
      <div
        className="dropdown__header"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
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
