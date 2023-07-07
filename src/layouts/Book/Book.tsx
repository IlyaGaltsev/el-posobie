import { Outlet, useNavigate } from 'react-router-dom'
import { BOOK_PAGE_ROUTE } from 'src/Navigation/routesNames'
import Header from 'src/components/Header'
import { useEffect } from 'react'

const Book = () => {
  const navigate = useNavigate()

  useEffect(() => {
    let route = window.location.hash

    if (route === `#${BOOK_PAGE_ROUTE}` || route === `#${BOOK_PAGE_ROUTE}/`) {
      navigate(`${BOOK_PAGE_ROUTE}/0`)
    }
  }, [navigate])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
export { Book }
