import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { TIconDropDown } from 'src/types'

const IconDropDown = ({ isOpen }: TIconDropDown) => {
  if (isOpen) return <AiOutlinePlus className="dropdown__header-icon" />
  
  return <AiOutlineMinus className="dropdown__header-icon" />
}

export default IconDropDown
