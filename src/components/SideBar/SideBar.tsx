import { BOOK_ROUTE } from 'src/navigation/routesNames'
import { NavLink, useParams } from 'react-router-dom'
import { navBook } from 'src/constants/navBook'
import { Dropdown } from '../Dropdown'
import './Sidebar.scss'
import { useLayoutEffect, useState } from 'react'

const Sidebar = () => {
  const params = useParams()
  let defaultValue = [false, false, false]
  const [defaultOpen, setDefaultOpen] = useState(defaultValue)

  useLayoutEffect(() => {
    if (Number(params?.id) >= 1 && Number(params?.id) <= 6) setDefaultOpen([true, false, false])
    if (Number(params?.id) >= 7 && Number(params?.id) <= 14) setDefaultOpen([false, true, false])
    if (Number(params?.id) >= 15 && Number(params?.id) <= 22) setDefaultOpen([false, false, true])

  }, [params.id])

  const handleOnClickDropDown = (key: number) => {
    if (key === 1) setDefaultOpen([!defaultOpen[0], defaultOpen[1], defaultOpen[2]])
    if (key === 2) setDefaultOpen([defaultOpen[0], !defaultOpen[1], defaultOpen[2]])
    if (key === 3) setDefaultOpen([defaultOpen[0], defaultOpen[1], !defaultOpen[2]])
  }

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        {navBook.map(({ children, key, label }: any, index: number) => {
          if (!children?.length)
            return (
              <NavLink key={key} className="sidebar-wrapper-navlink" to={`${BOOK_ROUTE}/${key}`}>
                {label}
              </NavLink>
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
