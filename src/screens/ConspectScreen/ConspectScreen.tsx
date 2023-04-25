import { ConspectCard } from '../../components/ConspectCard'
import * as S from '../../styled/PublicComponents.styled'
import { massConspects } from 'src/assets/data/massConspects'
import type { IMassConspects } from 'src/types'
import { type FC } from 'react'

const ConspectScreen: FC = () => {
  return (
    <div className='grid-screen__wrapper'>
      {massConspects.map((item: IMassConspects) => {
        return <ConspectCard key={item.id} {...item} />
      })}
    </div>
  )
}
export default ConspectScreen
