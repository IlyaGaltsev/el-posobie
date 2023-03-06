import { PrezentationCard } from "../../components/PrezentationCard"
import * as S from "../../constants/style/components.styled"
import { massPrez } from "../../assets/data/massPrez"

const PrezentationScreen = () => {
  return (
    <S.Grid>
      {massPrez.map(item => {
        return (
          <PrezentationCard
            key={item.id}
            {...item}
          />
        )
      })}
    </S.Grid>
  )
}
export { PrezentationScreen }
