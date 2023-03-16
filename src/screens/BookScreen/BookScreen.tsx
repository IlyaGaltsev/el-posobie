import { MdArrowBackIosNew, MdMenu } from 'react-icons/md'
import { tutorialSection } from '../../assets/data/data'
import { size } from '../../constants/style/breakpoints'
import { PageBook } from '../../components/PageBook'
import { SideBar } from '../../components/SideBar'
import { navBook } from '../../constants/navBook'
import * as S from './BookScreen.styled'
import { useState } from 'react'
import './BookScreen.scss'
import type { MenuProps } from 'antd'

const BookScreen = () => {
  const [open, setOpen] = useState(false)
  const [currentValue, setCurrentValue] = useState(0)

  const scrollToTop = () => {
    document
      .getElementById('top')
      ?.scrollIntoView(window.innerWidth > size.laptopS && { block: 'center', behavior: 'smooth' })
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

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    setOpenKeys(keys)
  }

  const onClick: MenuProps['onClick'] = e => {
    setCurrentValue(Number(e.key))
  }

  const [openKeys, setOpenKeys] = useState(['sub1'])
  console.log(window.innerWidth)

  return (
    <div className="book-screen">
      <div className="book-screen__wrapper">
        <SideBar
          selectPageBook={onClick}
          setOpen={setOpen}
          open={open}
          selectValue={currentValue}
        />
        <div className="book-screen__page">
          <S.ToolBar>
            <S.MenuButton type="primary" onClick={showDrawer}>
              <MdMenu style={{ marginRight: 10 }} />
              Оглавление
            </S.MenuButton>
          </S.ToolBar>
          <S.Row>
            <S.NavMenu
              items={navBook}
              onOpenChange={onOpenChange}
              openKeys={openKeys}
              defaultSelectedKeys={[String(currentValue)]}
              selectedKeys={[String(currentValue)]}
              onClick={onClick}
              defaultOpenKeys={['1']}
              mode="inline"
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
            <MdArrowBackIosNew style={{ rotate: '90deg' }} />
          </S.ButtonUp>
        </div>
      </div>
    </div>
  )
}
export { BookScreen }
