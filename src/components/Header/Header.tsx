import { headerNavigation } from 'src/Navigation/headerNavigation'
import { THeaderButton, THeaderNavigation } from '@/types'
import { headerButtons } from 'src/constants/headerButtons'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import HeaderButton from './components/HeaderButton'
import HeaderLink from './components/HeaderLink'
import { memo, useEffect, useState } from 'react'
import './Header.scss'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const navigation = useNavigate()
  
  const toggleNavMenu = () => {
    setOpen(!isOpen)
  }

  const closeNavMenu = () => {
    setOpen(false)
  }

  useEffect(() => {
    closeNavMenu()
  }, [navigation])

  return (
    <header>
      <div className="header-wrapper">
        <AiOutlineMenuUnfold
          className="header-nav-menu"
          onClick={toggleNavMenu}
          size={32}
        />
        <div className={`header-nav-links ${isOpen ? 'header-nav-links_open' : ''}`}>
          {headerNavigation.map((item: THeaderNavigation) => (
            <HeaderLink
              key={item.label}
              {...item}
            />
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
