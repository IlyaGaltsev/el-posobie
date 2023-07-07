import { VideoCard } from '../../components/VideoCard'
import massVideo from '../../assets/data/massVideo'
import { type FC } from 'react'
import './Videos.scss'

const VideoScreen: FC = () => {
  return (
    <div className="grid-screen__wrapper">
      {massVideo.map(item => {
        return (
          <VideoCard
            key={item.id}
            {...item}
          />
        )
      })}
    </div>
  )
}

export default VideoScreen
