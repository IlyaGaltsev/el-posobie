import { useNavigate, useParams } from 'react-router-dom'
import './PrezentationItem.scss'
import { Dialog, IconButton, Toolbar, AppBar } from '@mui/material'
import { MdClose } from 'react-icons/md'
import { massPrez } from 'src/assets/data/massPrez'
interface IPrezentationCard {
  id: string
  title: string
  tag: string
  path: string
  localPath?: any
  preview?: any
}

const PrezentationItem = () => {
  const params = useParams()
  const navigate = useNavigate()

  const { title, localPath, path }: IPrezentationCard | any = massPrez.find(
    (item: IPrezentationCard) => item.id === params.id
  )

  return (
    <Dialog className="page-video__wrapper" fullScreen open={true} onClose={() => navigate(-1)}>
      <AppBar sx={{ position: 'relative', background: '#556832', height: 46 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate(-1)} aria-label="close">
            <MdClose />
          </IconButton>
          <h3>{title}</h3>
        </Toolbar>
      </AppBar>
      <iframe title="prezentation" src={localPath} allow="autoplay" />
    </Dialog>
  )
}

export default PrezentationItem
