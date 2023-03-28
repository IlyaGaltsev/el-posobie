/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
import { MdMenu } from 'react-icons/md'
import { size } from '../../constants/style/breakpoints'
import { SideBar } from '../../components/SideBar'
import { navBook } from '../../constants/navBook'
import { useEffect, useState } from 'react'
import * as S from './BookScreen.styled'
import type { MenuProps } from 'antd'
import './BookScreen.scss'
import Book2 from './Book2'
import { FaArrowUp } from 'react-icons/fa'

const BookScreen = () => {
  const [open, setOpen] = useState(false)
  const [currentValue, setCurrentValue] = useState(0)

  const scrollToTop = () => {
    console.log(document.getElementById('boxtop'))
    document
      .getElementById('boxtop')
      ?.scrollIntoView(window.innerWidth > size.laptopS && { block: 'start', behavior: 'smooth' })
    // ?.scrollIntoView
  }

  const showDrawer = () => {
    setOpen(true)
  }

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    setOpenKeys(keys)
  }

  const onClickSidebar: MenuProps['onClick'] = e => {
    setCurrentValue(Number(e.key))
    document.getElementById(String(e.key))?.scrollIntoView({
      block: 'start'
    })
  }

  const [openKeys, setOpenKeys] = useState(['sub1'])
  console.log(window.innerWidth)

  const observer = new IntersectionObserver(
    entries => {
      console.log('ddd', entries)
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target.id)

          setCurrentValue(Number(entry.target.id))
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

  const linkConspects = (data: any) => {
    console.log('openModal:', data)
  }

  const linkVideo = (data: any) => {
    console.log('openVideo', data)
  }

  const linkPrezentation = (data: any) => {
    console.log('linkPrezentation', data)
  }

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
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center'
              }}
            >
              <Book2
                linkConspects={linkConspects}
                linkVideo={linkVideo}
                linkPrezentation={linkPrezentation}
              />
            </div>
          </S.Row>
          <S.ButtonUp
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: 20,
              right: 20
            }}
          >
            <FaArrowUp />
          </S.ButtonUp>
        </div>
      </div>
    </div>
  )
}
export { BookScreen }
