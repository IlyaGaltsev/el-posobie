import { maxContent } from '../../constants/style/breakpoints'
import { AppBar, IconButton, MenuItem } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import Toolbar from '@mui/material/Toolbar'

export const Bar = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
}))

export const Tool = styled(Toolbar)(({ theme }) => ({
  maxWidth: maxContent,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
}))

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',

  [theme.breakpoints.up('xs')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}))

export const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'flex',

  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}))

export const NavLinks = styled('div')(({ theme }) => ({
  display: 'none',
  justifyContent: 'flex-start',

  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}))

export const NavItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8
}))
