import { Card, CardContent, CardActions } from '@mui/material'
import * as P from '../../styled/PublicComponents.styled'
import { MdFileCopy } from 'react-icons/md'
import type { IMassConspects } from 'src/types'
import { Link } from 'react-router-dom'

const ConspectCard = ({ id, task, title, subtitle }: IMassConspects) => {
  return (
    <Card>
      <Link to={`/book/abstract/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <P.CardAction>
          <CardContent style={{ height: 'auto' }}>
            <P.CardUnderTitle sx={{ fontSize: 16 }} gutterBottom>
              {task}
            </P.CardUnderTitle>
            <P.CardTitle variant="h6" gutterBottom>
              {title}
            </P.CardTitle>
            <P.CardSubTitle variant="body2" color="text.secondary">
              {subtitle}
            </P.CardSubTitle>
          </CardContent>
          <CardActions>
            <P.CardButton size="small">
              <MdFileCopy />
              Перейти к документу
            </P.CardButton>
          </CardActions>
        </P.CardAction>
      </Link>
    </Card>
  )
}
export { ConspectCard }
