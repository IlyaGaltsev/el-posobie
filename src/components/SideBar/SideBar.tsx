import SidebarButton from './components/SidebarButton'
import { useLayoutEffect, useState } from 'react'
import { navBook } from 'src/Navigation/navBook'
import { useParams } from 'react-router-dom'
import { Dropdown } from '../Dropdown'
import { INavBook } from '@/types'

import './Sidebar.scss'

const Sidebar = ({closeSideBar}: any) => {
  const params = useParams()
  let defaultValue = [false, false, false]

  const [defaultOpen, setDefaultOpen] = useState(defaultValue)

  useLayoutEffect(() => {
    const id = Number(params?.id)
    if (id >= 1 && id <= 6) {
      setDefaultOpen([true, false, false])
    }
    if (id >= 7 && id <= 14) {
      setDefaultOpen([false, true, false])
    }
    if (id >= 15 && id <= 22) {
      setDefaultOpen([false, false, true])
    }

    closeSideBar()
  }, [params?.id])

  const handleOnClickDropDown = (key: number) => {
    const updatedDefaultOpen = [...defaultOpen]

    if (key === 1) {
      updatedDefaultOpen[0] = !defaultOpen[0]
    }

    if (key === 2) {
      updatedDefaultOpen[1] = !defaultOpen[1]
    }

    if (key === 3) {
      updatedDefaultOpen[2] = !defaultOpen[2]
    }

    setDefaultOpen(updatedDefaultOpen)
  }
  
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        {navBook.map(({ children, key, label }: INavBook, index: number) => {
          if (!children?.length)
            return (
              <SidebarButton
                key={key}
                id={key}
                label={label}
              />
            )

          return (
            <Dropdown
              key={index}
              id={index}
              isOpen={defaultOpen[index - 1]}
              label={label}
              onClick={handleOnClickDropDown}
              options={children}
            />
          )
        })}
      </div>
    </div>
  )
}

export { Sidebar }
