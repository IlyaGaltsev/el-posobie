import * as S from '../../styled/PublicComponents.styled'
import { VideoCard } from '../../components/VideoCard'
import massVideo from '../../assets/data/massVideo'
import { Loader } from '../../components/Loader'
import { type FC, useEffect, useState } from 'react'
import './VideoScreen.scss'

const VideoScreen: FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const videoImg = document.getElementById('video')
    if (videoImg != null) {
      videoImg.onload = function () {
        setLoading(false)
      }
    }
  })

  return (
    <div className="grid-screen__wrapper">
      {loading && <Loader />}
      {massVideo.map(item => {
        return <VideoCard key={item.id} {...item} />
      })}
    </div>
  )
}
export { VideoScreen }
