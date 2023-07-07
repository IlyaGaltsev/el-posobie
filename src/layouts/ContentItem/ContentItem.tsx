import { Dialog } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'

import './ContentItem.scss'

const ContentItem = ({ children, title }: any) => {
  const navigate = useNavigate()

  const handleClickClose = () => {
    navigate(-1)
  }

  return (
    <Dialog
      className="content-item__wrapper"
      open={true}
      fullScreen
    >
      <Header
        title={title}
        onClose={handleClickClose}
      />
      {children}
    </Dialog>
  )
}

export default ContentItem
