import { fontSizes } from './../constants/fontSizes'
import { createContext } from 'react'

interface IAppContext {
  fontSizeTheme: string
}

const defaultValue = {
  fontSizeTheme: fontSizes[0]
}

export const AppContext = createContext<IAppContext>(defaultValue)
