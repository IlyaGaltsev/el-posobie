import { VideoCard } from "../../components/VideoScreen/VideoCard"
import massVideo from "../../assets/data/massVideo"
import "./VideoScreen.scss"

const VideoScreen = () => {
  return (
    <div className="video-screen">
      <div className="video-screen__wrapper">
        <div className="video-screen__videos">
          {massVideo.map(item => {
            return (
              <VideoCard
                key={item.id}
                {...item}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
export { VideoScreen }
