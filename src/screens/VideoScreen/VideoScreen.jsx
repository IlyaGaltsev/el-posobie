import { VideoCard } from "../../components/VideoCard"
import * as S from "../../styled/PublicComponents.styled"
import massVideo from "../../assets/data/massVideo"

const VideoScreen = () => {
  return (
    <S.Grid>
      {massVideo.map(item => {
        return (
          <VideoCard
            key={item.id}
            {...item}
          />
        )
      })}
    </S.Grid>
  )
}
export { VideoScreen }
