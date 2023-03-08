import { PrezentationCard } from "../../components/PrezentationCard"
import * as S from "../../styled/PublicComponents.styled"
import { massPrez } from "../../assets/data/massPrez"
import { Loader } from "../../components/Loader"
import { useEffect, useState } from "react"

const PrezentationScreen = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.getElementById("prezentation").onload = function () {
      setLoading(false)
    }
  })

  return (
    <S.Grid>
      {loading && <Loader />}
      {massPrez.map(item => {
        return (
          <PrezentationCard
            key={item.title}
            {...item}
          />
        )
      })}
    </S.Grid>
  )
}
export { PrezentationScreen }
