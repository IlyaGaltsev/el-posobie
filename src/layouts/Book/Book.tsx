import { Header } from 'src/components/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { BOOK_ROUTE } from 'src/routesNames'

const Book = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (window.location.hash === `#${BOOK_ROUTE}`) {
      navigate(`${BOOK_ROUTE}/0`)
    }
  }, [navigate])

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
export { Book }
