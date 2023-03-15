import { Card, CardContent, CardActions } from '@mui/material'
import * as P from '../../styled/PublicComponents.styled'
import { MdFileCopy } from 'react-icons/md'
import type { IMassConspects } from '@/types'

const ConspectCard = ({ id, task, title, subtitle }: IMassConspects) => {
  return (
    <Card
      onClick={() =>
        (window.location.href = `https://docs.google.com/document/d/${id}/edit?usp=sharing&ou32858117889381065&rtpof=true&sd=true`)
      }
    >
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
    </Card>
  )
}
export { ConspectCard }
