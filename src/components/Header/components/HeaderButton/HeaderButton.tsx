import { THeaderButton } from '@/types'
import { useNavigate } from 'react-router-dom'
import './HeaderButton.scss'

const HeaderButton = ({ to, icon, title }: THeaderButton) => {
  const navigate = useNavigate()

  const navigation = () => {
    navigate(to)
  }
  return (
    <button
      onClick={navigation}
      className="primary-button"
    >
      {icon()}
      {title}
    </button>
  )
}

export default HeaderButton
