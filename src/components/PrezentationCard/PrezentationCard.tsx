import { Card, CardActionArea } from '@mui/material'
import * as P from '../../styled/PublicComponents.styled'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { FaPlay } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { PREZENTATIONS_ROUTE } from 'src/navigation/routesNames'

interface IPrezentationCard {
  id: string
  path?: string
  tag: string
  preview: string
  title: string
}

const PrezentationCard = ({ id, preview, tag, title }: IPrezentationCard) => {
  const navigate = useNavigate()

  return (
    <Card onClick={() => navigate(`${PREZENTATIONS_ROUTE}/${id}`)}>
      <CardActionArea>
        <CardMedia
          id="prezentation"
          component="img"
          alt={title}
          height="174"
          style={{ objectPosition: 'top' }}
          image={preview}
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
export { PrezentationCard }
