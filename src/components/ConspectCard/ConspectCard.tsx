import type { IMassConspects } from 'src/types'
import UniwerselCardMedia from '../UniwerselCardMedia'
import { CONSPECTS_ROUTE } from 'src/Navigation/routesNames'

const ConspectCard = ({ id, task, title, subtitle }: IMassConspects) => {
  return (
    <UniwerselCardMedia
      to={`${CONSPECTS_ROUTE}/${id}`}
      tag={task}
      title={title}
      subtitle={subtitle}
      actionTitle='Перейти к документу'
    />
  )
}
export { ConspectCard }
