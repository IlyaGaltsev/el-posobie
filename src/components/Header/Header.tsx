import { headerNavigation } from 'src/Navigation/headerNavigation'
import { THeaderButton, THeaderNavigation } from '@/types'
import { headerButtons } from 'src/constants/headerButtons'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import HeaderButton from './components/HeaderButton'
import { memo, useState } from 'react'
import './Header.scss'

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleNavMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <header>
      <div className="header-wrapper">
        <AiOutlineMenuUnfold
          className="header-nav-menu"
          onClick={toggleNavMenu}
          size={32}
        />
        <div className={`header-nav-links ${isOpen ? 'header-nav-links_open' : ''}`}>
          {headerNavigation.map(({ key, label }: THeaderNavigation) => (
            <NavLink
              key={key}
              to={key}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div className="header-buttons">
          {headerButtons.map((item: THeaderButton) => (
            <HeaderButton
              key={item.to}
              {...item}
            />
          ))}
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
