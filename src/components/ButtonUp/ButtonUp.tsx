import { TButtonUp } from '@/types'
import { FaArrowUp } from 'react-icons/fa'
import './ButtonUp.scss'

const ButtonUp = ({ onClick }: TButtonUp) => {
  return (
    <div className="up-button" onClick={onClick}>
      <FaArrowUp size={20} />
    </div>
  )
}

export default ButtonUp
