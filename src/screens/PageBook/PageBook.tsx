import { bookPages } from 'src/assets/data/bookPages'
import { Link, useParams } from 'react-router-dom'
import './PageBook.scss'
import { BOOK_ROUTE } from 'src/routesNames'
import { useEffect } from 'react'

const PageBook = () => {
  const params = useParams()
  const bookPage = bookPages.find((item: any) => item.key === Number(params.id))

  useEffect(() => {
    if (document !== null) document?.getElementById(String(bookPage?.key) ?? "0")?.scrollIntoView() 
  }, [bookPage])

  return (
    <div>
      {bookPage?.content() ?? 'Выберите страницу'}
      <div className="book-screen__page-actions">
        <Link to={`${BOOK_ROUTE}/${(bookPage?.key ?? 1) - 1}`} className="primary-button">
          Назад
        </Link>
        <Link to={`${BOOK_ROUTE}/${(bookPage?.key ?? -1) + 1}`} className="primary-button">
          Далее
        </Link>
      </div>
    </div>
  )
}
export { PageBook }
