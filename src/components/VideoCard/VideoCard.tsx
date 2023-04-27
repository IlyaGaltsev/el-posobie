import { AppBar, CardActionArea, Dialog, IconButton, Toolbar } from '@mui/material'
import * as P from '../../styled/PublicComponents.styled'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { MdClose } from 'react-icons/md'
import Slide from '@mui/material/Slide'
import * as S from './VideoCard.styled'
import { FaPlay } from 'react-icons/fa'
import Card from '@mui/material/Card'
import { useState } from 'react'
import * as React from 'react'
import type { TransitionProps } from '@mui/material/transitions'
import { useNavigate } from 'react-router-dom'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface IVideoCard {
  id: string
  tag: string
  promo: string
  title: string
}

const VideoCard = ({ id, tag, promo, title }: IVideoCard) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }

  return (
    <Card onClick={() => navigate(`/book/videos/${id}`)}>
      <CardActionArea>
        <CardMedia
          id="video"
          component="img"
          alt={title}
          height="174"
          image={`//img.youtube.com/vi/${id}/hqdefault.jpg`}
        />
        <CardContent>
          <P.CardUnderTitle>{tag}</P.CardUnderTitle>
          <P.CardTitle gutterBottom variant="h6">
            {title}
          </P.CardTitle>
          <P.CardButton size="small">
            <FaPlay />
            Воспроизвести
          </P.CardButton>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export { VideoCard }
