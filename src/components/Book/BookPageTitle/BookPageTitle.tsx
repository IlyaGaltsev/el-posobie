import { TBookPageTitle } from '@/types'
import { arabicToRoman } from 'src/utils/config/globalMethods/arabicToRoman'
import './BookPageTitle.scss'

const BookPageTitle = ({ isShow, chapter, title }: TBookPageTitle) => {
  const getLocation = () => {
    return arabicToRoman(chapter ?? 0)
  }

  if (!isShow) return null

  return (
    <p className="book-page-title">
      {chapter ? `Раздел ${getLocation()} > ` : ''}
      {title}
    </p>
  )
}

export default BookPageTitle
