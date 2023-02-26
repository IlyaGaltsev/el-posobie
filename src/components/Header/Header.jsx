import "./Header.scss";
import { NavLink } from "react-router-dom";
import { headerNav } from "../../constants/headerNav";

const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <nav>
          {headerNav.map(({ path, icon, title }) => {
            return (
              <NavLink
                to={path}
                className={({ isActive }) => isActive && "current__tab"}
              >
                {icon}
                {title}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
export { Header };
