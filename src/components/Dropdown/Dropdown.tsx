import { IDropdown } from '@/types'
import HeaderDropDown from './components/HeaderDropDown'
import OptionsDropDown from './components/OptionsDropDown'

import './Dropdown.scss'

const Dropdown = ({ id, label, options, isOpen, onClick }: IDropdown) => {
  return (
    <div className="dropdown">
      <HeaderDropDown
        id={id}
        label={label}
        isOpen={isOpen}
        onClick={onClick}
      />
      <OptionsDropDown
        isOpen={isOpen}
        options={options}
      />
    </div>
  )
}

export { Dropdown }
