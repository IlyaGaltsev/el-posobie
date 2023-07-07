export interface IRoute {
  path: string
  element: any
  childrenRoutes?: IRoute[]
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
