import { Outlet } from 'react-router-dom'
import { Sidebar } from 'src/components/Sidebar'
import { FC, useState } from 'react'

import './Book.scss'

const Book: FC = () => {
  const [isOpen, setOpen] = useState(true)

  return (
    <div className="book-screen">
      <div className="book-screen__wrapper">
        <div className={`book-screen__sidebar ${isOpen ? 'book-screen__sidebar_open' : ''}`}>
          <Sidebar />
        </div>

        <Outlet />
      </div>
    </div>
  )
}
export default Book
