import { VIDEO_ROUTE } from 'src/Navigation/routesNames'
import type { IVideoCard } from '@/types'
import UniwerselCardMedia from '../UniwerselCardMedia'

const VideoCard = ({ id, tag, title }: IVideoCard) => {
  return (
    <UniwerselCardMedia
      to={`${VIDEO_ROUTE}/${id}`}
      imageUrl={`//img.youtube.com/vi/${id}/hqdefault.jpg`}
      tag={tag}
      title={title}
    />
  )
}
export { VideoCard }
