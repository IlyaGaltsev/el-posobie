import { MdArrowBackIosNew, MdMenu } from 'react-icons/md'
import { size } from '../../constants/style/breakpoints'
import { SideBar } from '../../components/SideBar'
import { navBook } from '../../constants/navBook'
import * as S from './BookScreen.styled'
import { useEffect, useState } from 'react'
import './BookScreen.scss'
import type { MenuProps } from 'antd'
import Book from 'src/assets/data/Book'
// import { observer } from './findsection'

const BookScreen = () => {
  const [open, setOpen] = useState(false)
  const [currentValue, setCurrentValue] = useState(0)

  const scrollToTop = () => {
    document
      .getElementById('top')
      ?.scrollIntoView(window.innerWidth > size.laptopS && { block: 'center', behavior: 'smooth' })
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

  const onClickSidebar: MenuProps['onClick'] = e => {
    setCurrentValue(Number(e.key))
    document.getElementById(String(e.key))?.scrollIntoView({
      // behavior: 'smooth',
      block: 'start'
      //  inline: 'nearest'
    })
  }

  const [openKeys, setOpenKeys] = useState(['sub1'])
  console.log(window.innerWidth)

  const observer = new IntersectionObserver(
    entries => {
      console.log('ddd', entries)
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // ? id=""
          console.log(entry.target.id)

          onClick({
            key: entry.target.id,
            keyPath: [],
            item: undefined,
            domEvent: undefined
          })
          // document.querySelectorAll('.nav__link').forEach(link => {
          //   const id = link?.getAttribute('href').replace('#', '')
          //   if (id === entry.target.id) {
          //     link.classList.add('nav__link--active')
          //   } else {
          //     link.classList.remove('nav__link--active')
          //   }
          // })
        }
      })
    },
    {
      threshold: 0
    }
  )

  useEffect(() => {
    // console.log(observer)
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section)
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      console.log(observer, observer.observe(section))
    })
  }, [])

  return (
    <div className="book-screen">
      <div className="book-screen__wrapper">
        <SideBar
          selectPageBook={onClickSidebar}
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
              onClick={onClickSidebar}
              defaultOpenKeys={['1']}
              mode="inline"
            />
            <Book />
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
