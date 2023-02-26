import { navBook } from "../../constants/navBook"
import { IoClose } from "react-icons/io5"
import { DropDown } from "../DropDown"
import "./SideBar.scss"

const SideBar = ({ onClick, setShowMenu }) => {
  return (
    <>
      <div
        id="sidebar__close"
        className="sidebar__close"
        onClick={() => setShowMenu(false)}
      />
      <div
        id="mySidenav"
        className="sidebar"
      >
        <IoClose
          className="closebtn"
          color="white"
          onClick={() => setShowMenu(false)}
        />
        {navBook.map(item => (
          <DropDown
            key={item.id}
            openPage={onClick}
            {...item}
          />
        ))}
      </div>
    </>
  )
}

export { SideBar }
