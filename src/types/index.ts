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
