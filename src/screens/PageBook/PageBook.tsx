import { bookPages } from 'src/assets/data/bookPages'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './PageBook.scss'
import { BOOK_ROUTE } from 'src/routesNames'
import { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { FaArrowUp } from 'react-icons/fa'
const PageBook = () => {
  const params = useParams()
  const bookPage = bookPages.find((item: any) => item.key === Number(params.id))
const navigate = useNavigate()

  const arabicToRoman = (arabicNumber: number) => {
    const romanNumeralMap = new Map([
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
    ])

    let result = ''

    romanNumeralMap.forEach((value, key) => {
      while (arabicNumber >= key) {
        result += value
        arabicNumber -= key
      }
    })

    return result
  }

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
      console.log(scrollPosition)
      setIsVisible((scrollPosition ?? 0) > 100)
    }

    if (document !== null)
      document?.querySelector('.page-book')?.addEventListener('scroll', handleScroll)
    return () => document?.querySelector('.page-book')?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-book">
      {isVisible && (
        <p className="page-book__title">
          {bookPage?.chapter ? `Раздел ${arabicToRoman(bookPage?.chapter ?? 0)} >` : ''}{' '}
          {bookPage?.title}
        </p>
      )}

      {bookPage?.content(navigate) ?? 'Выберите страницу'}
      <div className="book-screen__page-actions">
        <Link
          to={`${BOOK_ROUTE}/${(bookPage?.key ?? 1) - 1}`}
          className="primary-button"
          style={bookPage?.key === 0 ? { display: 'none' } : {}}
        >
          <AiOutlineArrowLeft /> Назад
        </Link>

        <div />

        <Link
          to={`${BOOK_ROUTE}/${(bookPage?.key ?? -1) + 1}`}
          className="primary-button"
          style={bookPage?.key === 23 ? { display: 'none' } : {}}
        >
          Далее <AiOutlineArrowRight />
        </Link>
      </div>
      <div className="page-book__up-button" onClick={scrollOnPageTop}>
        <FaArrowUp size={20} />
      </div>
    </div>
  )
}
export { PageBook }
