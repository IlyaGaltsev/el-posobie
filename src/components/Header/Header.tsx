/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
// import { navigation } from 'src/utils/constants/componentsData/navigation'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import './Header.scss'
import { useState } from 'react'
import {VscPreview, VscInfo} from "react-icons/vsc"
import { navigation } from 'src/navigation/navigation'
const Header = () => {
  const navigate = useNavigate()
  const [isOpen, setOpen] = useState(false)

  return (
    <header>
      <div className="header-wrapper">
        <AiOutlineMenuUnfold className="header-nav-menu" onClick={() => setOpen(!isOpen)} size={32} />
        <div className={`header-nav-links ${isOpen ? 'header-nav-links_open' :''}`}>
          {navigation.map(({ key, label }: any) => (
            <NavLink key={key} to={key}>
              {label}
            </NavLink>
          ))}
        </div>
        <div className="header-buttons">
          <button onClick={() => navigate('/')} className="primary-button">
            <VscPreview className='header-buttons-icon' size={24}/>
            Титульная страница
          </button>
          <button
            className="primary-button"
            onClick={() => navigate('/about')}
          >
            <VscInfo className='header-buttons-icon' size={24}/>
            О проекте
          </button>
        </div>
      </div>
    </header>
  )
}

export { Header }
