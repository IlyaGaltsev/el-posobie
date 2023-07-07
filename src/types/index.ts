import { MouseEventHandler } from 'react'

export interface IRoute {
  path: string
  element: any
  childrenRoutes?: IRoute[]
}

export type TBookPage = {
  key: number
  title: string
  content: any
  chapter?: number
}

export type TBookPageTitle = {
  isShow: boolean
  key?: number | undefined
  title?: string | undefined
  content?: any
  chapter?: number | undefined
}

export type TBottomNavigation = {
  bookPage: TBookPage
}

export type TBottomNavigationButton = {
  position: string
  bookKey: number
}

export type TBottomNavigationButtonContent = Pick<TBottomNavigationButton, 'position'>

export type TButtonUp = {
  onClick: MouseEventHandler<HTMLDivElement>
}

export interface IMassConspects {
  number: number
  task: string
  title: string
  subtitle: string
  id: string
  tag: string
  path?: any
}

export interface IPrezentationCard {
  id: string
  title: string
  tag: string
  path: string
  localPath?: any
  preview?: any
}

export interface IVideoCard {
  id: string
  title: string
  tag: string
  promo?: any
}

export interface INavBook {
  key: number
  label: string
  children?: INavBook[]
}

export type TSidebarButton = {
  id: number
  label: string
}

export interface IDropdown {
  label: string
  isOpen: boolean
  options: INavBook[]
  onClick: Function
  id?: number
}

export type THeaderDropDown = Omit<IDropdown, 'options'>
export type TOptionsDropDown = Pick<IDropdown, 'isOpen' | 'options'>
export type TOptionDropDownItem = {
  option: INavBook
}
export type TIconDropDown = Pick<IDropdown, 'isOpen'>
