import { useNavigate, useParams } from 'react-router-dom'
import './PageVideo.scss'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import massVideo from 'src/assets/data/massVideo'
import { Dialog, IconButton, Toolbar, AppBar } from '@mui/material'
import { MdClose } from 'react-icons/md'
// import
interface IVideoCard {
  id: string
  title: string
  tag: string
  promo?: any
}
const PageVideo = () => {
  const params = useParams()
  const navigate = useNavigate()

  const { title, tag }: IVideoCard | any = massVideo.find(
    (item: IVideoCard) => item.id === params.id
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
      <iframe
        title="video"
        src={`https://www.youtube.com/embed/${params.id}?autoplay=1`}
        allow="autoplay"
      />
    </Dialog>
  )
}

export { PageVideo }
