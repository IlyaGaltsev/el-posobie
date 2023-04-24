import { Header } from 'src/components/Header'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fontSizes } from 'src/constants/fontSizes'

const Book = () => {
  const [fontSizeTheme, setFontSizeTheme] = useState(fontSizes[0])

  useEffect(() => {
    const fontSizeThemeLocal = localStorage.getItem('fontSizeTheme')

    if (fontSizeThemeLocal != null) {
      setFontSizeTheme(fontSizeThemeLocal)
    }
  }, [fontSizeTheme])

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
export { Book }
