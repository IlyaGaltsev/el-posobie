import type { IPrezentationCard } from '@/types'
import { PREZENTATIONS_ROUTE } from 'src/Navigation/routesNames'
import UniwerselCardMedia from '../UniwerselCardMedia'

const PrezentationCard = ({ id, preview, tag, title }: IPrezentationCard) => {
  return (
    <UniwerselCardMedia
      to={`${PREZENTATIONS_ROUTE}/${id}`}
      imageUrl={preview}
      tag={tag}
      title={title}
    />
  )
}

export { PrezentationCard }
