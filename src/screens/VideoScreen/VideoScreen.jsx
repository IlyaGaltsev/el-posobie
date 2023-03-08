import { VideoCard } from "../../components/VideoCard"
import * as S from "../../styled/PublicComponents.styled"
import massVideo from "../../assets/data/massVideo"
import { Loader } from "../../components/Loader"
import { useEffect } from "react"
import { useState } from "react"

const VideoScreen = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.getElementById("video").onload = function () {
      setLoading(false)
    }
  })

  return (
    <S.Grid>
      {/* {loading && <Loader />} */}
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
