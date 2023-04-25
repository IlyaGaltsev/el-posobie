import { BOOK_ROUTE } from 'src/routesNames'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { navBook } from 'src/constants/navBook'
import { Dropdown } from '../Dropdown'
import './Sidebar.scss'
import { useEffect, useLayoutEffect, useState } from 'react'

const Sidebar = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [defaultOpen, setDefaultOpen] = useState([false, false, false])
  // let defaultOpen: boolean[] = [false, false, false]

  useLayoutEffect(() => {
    if (Number(params?.id) >= 1 && Number(params?.id) <= 6) setDefaultOpen([true, false, false])
    if (Number(params?.id) >= 7 && Number(params?.id) <= 14) setDefaultOpen([false, true, false])
    if (Number(params?.id) >= 15 && Number(params?.id) <= 22) setDefaultOpen([false, false, true])

    // console.log(params.id, defaultOpen)
  }, [params.id])

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
              key={key}
              label={label}
              options={children}
              defaultOpen={defaultOpen[2]}
            />
          )
        })}
      </div>
    </div>
  )
}

export { Sidebar }
