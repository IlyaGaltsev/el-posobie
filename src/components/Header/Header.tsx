/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import { navigation } from '../../constants/navigation'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header>
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
          {/* <button className="bvi-open">BVI</button> */}
        </div>
      </div>
    </header>
  )
}

export { Header }
