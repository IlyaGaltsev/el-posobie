import { memo, useEffect, useState } from 'react'
import { bookPages } from 'src/assets/data/bookPages'
import { useNavigate, useParams } from 'react-router-dom'
import BottomNavigation from 'src/components/Book/BottomNavigation'
import BookPageTitle from 'src/components/Book/BookPageTitle'
import ButtonUp from 'src/components/ButtonUp'
import './Page.scss'

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
      <BookPageTitle isShow={isVisible} {...bookPage} />

      {bookPage?.content(navigate) ?? 'Выберите страницу'}

      {bookPage ? <BottomNavigation bookPage={bookPage} /> : null}
      <ButtonUp onClick={scrollOnPageTop} />
    </div>
  )
}
export default memo(Page)
