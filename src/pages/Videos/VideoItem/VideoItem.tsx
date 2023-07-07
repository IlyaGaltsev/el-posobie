import { FC } from 'react'
import { useParams } from 'react-router-dom'
import massVideo from 'src/assets/data/massVideo'
import ContentItem from 'src/layouts/ContentItem'
import ReactPlayer from 'react-player'
import { IVideoCard } from '@/types'

const VideoItem: FC = () => {
  const params = useParams()

  const { title, path }: IVideoCard | any = massVideo.find(
    (item: IVideoCard) => item.id === params.id
  )

  return (
    <ContentItem title={title}>
      {path ? (
        <ReactPlayer
          url={path}
          playing
          controls
          width="100%"
          height="calc(100vh - 46px)"
        />
      ) : (
        <p>Не удалось найти путь к видео, попробуйте позже</p>
      )}
    </ContentItem>
  )
}

export default VideoItem
