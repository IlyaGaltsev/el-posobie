/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import { navigation } from '../../constants/navigation'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="header-wrapper">
      <div className="header-nav-links">
        {navigation.map(({ key, label }) => (
          <NavLink key={key} to={key}>
            {label}
          </NavLink>
        ))}
      </div>
      <div className="header-buttons">
        <button onClick={() => navigate('/')} className="primary-button">
          Титульная страница
        </button>
        <button className="primary-button">О проекте</button>
      </div>
    </div>
  )
}

export { Header }
