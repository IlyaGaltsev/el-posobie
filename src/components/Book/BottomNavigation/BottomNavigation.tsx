import BottomNavigationButton from '../BottomNavigationButton'
import { TBottomNavigation } from '@/types'
import './BottomNavigation.scss'

const BottomNavigation = ({ bookPage }: TBottomNavigation) => {
  return (
    <div className="bottom-navigation">
      <BottomNavigationButton
        position="left"
        bookKey={bookPage.key}
      />

      <div />

      <BottomNavigationButton
        position="right"
        bookKey={bookPage.key}
      />
    </div>
  )
}

export default BottomNavigation
