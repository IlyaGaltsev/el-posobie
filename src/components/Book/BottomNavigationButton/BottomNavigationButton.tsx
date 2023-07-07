import BottomNavigationButtonContent from '../BottomNavigationButtonContent'
import { BOOK_PAGE_ROUTE } from 'src/Navigation/routesNames'
import { Link } from 'react-router-dom'
import { TBottomNavigationButton } from '@/types'



const BottomNavigationButton = ({ position, bookKey }: TBottomNavigationButton) => {
  const getUrl = (): string => {
    if (position === 'left') {
      return `${BOOK_PAGE_ROUTE}/${(bookKey ?? 1) - 1}`
    }

    return `${BOOK_PAGE_ROUTE}/${(bookKey ?? -1) + 1}`
  }

  const hideExtremeStyle = (): object => {
    if ((bookKey === 0 && position === 'left') || (bookKey === 23 && position === 'right')) {
      return { display: 'none' }
    }

    return {}
  }

  return (
    <Link
      to={getUrl()}
      className="primary-button"
      style={hideExtremeStyle()}
    >
      <BottomNavigationButtonContent position={position} />
    </Link>
  )
}

export default BottomNavigationButton
