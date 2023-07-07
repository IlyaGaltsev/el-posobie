import { THeaderNavigation } from '@/types'
import { NavLink } from 'react-router-dom'
import './HeaderLink.scss'

const HeaderLink = ({ path, label }: THeaderNavigation) => {
  return <NavLink to={path}>{label}</NavLink>
}

export default HeaderLink
