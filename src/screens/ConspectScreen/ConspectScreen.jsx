import { ConspectCard } from "../../components/ConspectCard"
import * as S from "../../styled/PublicComponents.styled"
import massConspects from "../../assets/data/massConspects"


const ConspectScreen = () => {
  return (
    <S.Grid>
      {massConspects.map(item => {
        return (
          <ConspectCard
            key={item.id}
            {...item}
          />
        )
      })}
    </S.Grid>
  )
}
export { ConspectScreen }
