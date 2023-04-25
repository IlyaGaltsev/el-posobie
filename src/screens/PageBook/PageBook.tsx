import { bookPages } from 'src/assets/data/bookPages'
import { Link, useParams } from 'react-router-dom'
import './PageBook.scss'
import { BOOK_ROUTE } from 'src/routesNames'
import { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
const PageBook = () => {
  const params = useParams()
  const bookPage = bookPages.find((item: any) => item.key === Number(params.id))

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
    ]);
  
    let result = '';
  
    romanNumeralMap.forEach((value, key) => {
      while (arabicNumber >= key) {
        result += value;
        arabicNumber -= key;
      }
    });
  
    return result;
  }

  useEffect(() => {
    if (document !== null) document?.getElementById(String(bookPage?.key) ?? '0')?.scrollIntoView()
  }, [bookPage])

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document?.querySelector('.page-book')?.scrollTop
      console.log(scrollPosition)
      setIsVisible((scrollPosition ?? 0) > 100)
    }

    if (document !== null) document?.querySelector('.page-book')?.addEventListener('scroll', handleScroll)
    return () => document?.querySelector('.page-book')?.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className="page-book">
      {isVisible && (
        <p className="page-book__title">
          {bookPage?.chapter ? `Раздел ${arabicToRoman(bookPage?.chapter ?? 0)} >` : ''} {bookPage?.title}
        </p>
      )}

      {bookPage?.content() ?? 'Выберите страницу'}
      <div className="book-screen__page-actions">
        <Link to={`${BOOK_ROUTE}/${(bookPage?.key ?? 1) - 1}`} className="primary-button">
          <AiOutlineArrowLeft /> Назад
        </Link>
        <Link to={`${BOOK_ROUTE}/${(bookPage?.key ?? -1) + 1}`} className="primary-button">
          Далее <AiOutlineArrowRight />
        </Link>
      </div>
    </div>
  )
}
export { PageBook }
