import { useNavigate, useParams } from 'react-router-dom'
import './Conspect.scss'
import { Dialog, IconButton, Toolbar, AppBar } from '@mui/material'
import { MdClose } from 'react-icons/md'
import { massConspects } from 'src/assets/data/massConspects'

const Conspect = () => {
  const params = useParams()
  const navigate = useNavigate()

  const { title, path }: any = massConspects.find(
    (item: any) => item.id === params.id
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
      <iframe title="prezentation" src={path} allow="autoplay" />
    </Dialog>
  )
}

export { Conspect }
