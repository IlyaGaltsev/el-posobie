import "./Header.scss"
import { headerNav } from "../../constants/headerNav"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <nav>
          {headerNav.map(({ path, icon, title }) => {
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => (isActive ? "current__tab" : "")}
              >
                {icon}
                {title}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
export { Header }
