import { bookPages } from 'src/assets/data/bookPages'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './Page.scss'
import { BOOK_PAGE_ROUTE } from 'src/Navigation/routesNames'
import { memo, useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { FaArrowUp } from 'react-icons/fa'
import { arabicToRoman } from 'src/utils/config/globalMethods/arabicToRoman'
import BottomNavigation from 'src/components/Book/BottomNavigation'
import ButtonUp from 'src/components/ButtonUp'
import BookPageTitle from 'src/components/Book/BookPageTitle'

const Page = () => {
  const params = useParams()
  const bookPage = bookPages.find((item: any) => item.key === Number(params.id))
  const navigate = useNavigate()

  const scrollOnPageTop = () => {
    if (document !== null) document?.getElementById(String(bookPage?.key) ?? '0')?.scrollIntoView()
  }

  useEffect(() => {
    scrollOnPageTop()
  }, [bookPage])

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document?.querySelector('.page-book')?.scrollTop
      setIsVisible((scrollPosition ?? 0) > 100)
    }

    if (document !== null)
      document?.querySelector('.page-book')?.addEventListener('scroll', handleScroll)
    return () => document?.querySelector('.page-book')?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-book">
      <BookPageTitle isShow={isVisible} {...bookPage}/>

      {bookPage?.content(navigate) ?? 'Выберите страницу'}

      {bookPage ? <BottomNavigation bookPage={bookPage} /> : null}
      <ButtonUp onClick={scrollOnPageTop} />
    </div>
  )
}
export default memo(Page)
