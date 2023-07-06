import { THeaderDropDown } from 'src/types'
import IconDropDown from '../IconDropDown'

const HeaderDropDown = ({ 
  id,
  label,
  isOpen,
  onClick
}: THeaderDropDown) => {
    
  return (
    <div
      className="dropdown__header"
      onClick={() => onClick(id)}
    >
      <IconDropDown isOpen={isOpen} />
      {label}
    </div>
  )
}

export default HeaderDropDown
