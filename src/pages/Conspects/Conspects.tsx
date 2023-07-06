import { ConspectCard } from '../../components/ConspectCard'
import { massConspects } from 'src/assets/data/massConspects'
import { type FC } from 'react'
import { type IMassConspects } from 'src/types'

const Conspects: FC = () => {
  return (
    <div className="grid-screen__wrapper">
      {massConspects.map((item: IMassConspects) => {
        return (
          <ConspectCard
            key={item.id}
            {...item}
          />
        )
      })}
    </div>
  )
}
export default Conspects
