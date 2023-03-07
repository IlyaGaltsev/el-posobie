import { PrezentationCard } from "../../components/PrezentationCard"
import * as S from "../../styled/PublicComponents.styled"
import { massPrez } from "../../assets/data/massPrez"
import { useState } from "react"
import { Spin } from "antd"
import { useEffect } from "react"

const PrezentationScreen = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.getElementById("prezentation").onload = function () {
      setLoading(false)
      console.log(loading)
    }
  })

  return (
    <S.Grid>
      {loading && (
        <S.CenterPage>
          <Spin size="large" />
        </S.CenterPage>
      )}

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
