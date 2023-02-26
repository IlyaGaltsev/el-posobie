import { useEffect, useState } from "react"
import tutorialSection from "../../assets/data/data"
import { DropDown } from "../../components/DropDown"
import { PageBook } from "../../components/PageBook"
import "./BookScreen.scss"
import { navBook } from "../../constants/navBook"
import { SideBar } from "../../components/SideBar"

const BookScreen = () => {
  const [currentValue, setCurrentValue] = useState(0)

  const openPage = id => {
    setCurrentValue(id)
  }
  const onNext = () => {
    setCurrentValue(currentValue + 1)
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px"
    document.getElementById("main").style.marginLeft = "250px"

    document.getElementById("sidebar__close").style.display = "block"
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
    document.getElementById("main").style.marginLeft = "0"

    document.getElementById("sidebar__close").style.display = "none"
  }

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (document.getElementById("sidebar__close") && document.getElementById("mySidenav") && document.getElementById("main")) {
      showMenu ? openNav() : closeNav()
    }
  }, [showMenu])

  return (
    <div className="book-screen">
      <div className="book-screen__wrapper">
        <SideBar
          onClick={openPage}
          setShowMenu={setShowMenu}
        />
        <div className="book-screen__page">
          <button onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? "Скрыть оглавление" : "Оглавление"}
          </button>
          <PageBook
            {...tutorialSection[currentValue]}
            onNext={onNext}
          />
        </div>
      </div>
    </div>
  )
}
export { BookScreen }
