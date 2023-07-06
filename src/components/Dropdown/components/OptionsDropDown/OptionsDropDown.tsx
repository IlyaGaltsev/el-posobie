import OptionsDropDownItem from '../OptionsDropDownItem'
import { TOptionsDropDown } from 'src/types'

const OptionsDropDown = ({ 
  isOpen,
  options
}: TOptionsDropDown) => {
    
  if (isOpen) {
    return (
      <ul className="dropdown__options">
        {options?.map(option => (
          <OptionsDropDownItem
            key={option.key}
            option={option}
          />
        ))}
      </ul>
    )
  }

  return null
}

export default OptionsDropDown
