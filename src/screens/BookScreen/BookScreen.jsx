import { tutorialSection } from "../../assets/data/data"
import { PageBook } from "../../components/PageBook"
import { MdArrowBackIosNew } from "react-icons/md"
import { SideBar } from "../../components/SideBar"
import { navBook } from "../../constants/navBook"
import * as S from "./BookScreen.styled"
import { MdMenu } from "react-icons/md"
import { useState } from "react"
import "./BookScreen.scss"

const BookScreen = () => {
  const [open, setOpen] = useState(false)
  const [currentValue, setCurrentValue] = useState(0)

  const scrollToTop = () => {
    document.getElementById("top").scrollIntoView({ block: "center", behavior: "smooth" })
  }

  const onPrev = () => {
    setCurrentValue(currentValue - 1)
    scrollToTop()
  }

  const onNext = () => {
    setCurrentValue(currentValue + 1)
    scrollToTop()
  }

  const showDrawer = () => {
    setOpen(true)
  }

  const selectPageBook = e => {
    setCurrentValue(parseInt(e.key))
  }

  return (
    <div className="book-screen">
      <div className="book-screen__wrapper">
        <SideBar
          selectPageBook={selectPageBook}
          setOpen={setOpen}
          open={open}
          showDrawer={showDrawer}
          selectValue={currentValue}
        />
        <div className="book-screen__page">
          <S.ToolBar>
            <S.MenuButton
              type="primary"
              onClick={showDrawer}
            >
              <MdMenu />
              Оглавление
            </S.MenuButton>
          </S.ToolBar>
          <S.Row>
            <S.NavMenu
              defaultSelectedKeys={currentValue.toString()}
              selectedKeys={currentValue.toString()}
              defaultOpenKeys={["1"]}
              mode="inline"
              theme="light"
              items={navBook}
              onClick={selectPageBook}
            />
            <PageBook
              {...tutorialSection[currentValue]}
              onPrev={onPrev}
              onNext={onNext}
              minLenght={1}
              maxLenght={tutorialSection.length - 1}
            />
          </S.Row>
          <S.ButtonUp onClick={scrollToTop}>
            <MdArrowBackIosNew style={{ rotate: "90deg" }} />
          </S.ButtonUp>
        </div>
      </div>
    </div>
  )
}
export { BookScreen }
