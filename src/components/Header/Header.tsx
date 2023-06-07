/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import { navigation } from '../../constants/navigation'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import './Header.scss'
import { useState } from 'react'
import {VscPreview, VscInfo} from "react-icons/vsc"
const Header = () => {
  const navigate = useNavigate()
  const [isOpen, setOpen] = useState(false)

  return (
    <header>
      <div className="header-wrapper">
        <AiOutlineMenuUnfold className="header-nav-menu" onClick={() => setOpen(!isOpen)} size={32} />
        <div className={`header-nav-links ${isOpen ? 'header-nav-links_open' :''}`}>
          {navigation.map(({ key, label }) => (
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
            onClick={() =>
              window.open(
                'https://docs.google.com/document/d/1mW77FIHs7DN1H2TDlcz3mPJR0kEpFGx9/edit?usp=sharing&ouid=102538077575094677183&rtpof=true&sd=true',
                '_blank'
              )
            }
          >
            <VscInfo className='header-buttons-icon' size={24}/>
            О проекте
          </button>
          {/* <button className="bvi-open">BVI</button> */}
        </div>
      </div>
    </header>
  )
}

export { Header }
