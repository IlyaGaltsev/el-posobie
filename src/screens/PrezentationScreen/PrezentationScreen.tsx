import { PrezentationCard } from '../../components/PrezentationCard'
import * as S from '../../styled/PublicComponents.styled'
import { massPrez } from '../../assets/data/massPrez'
import { Loader } from '../../components/Loader'
import { type FC, useEffect, useState } from 'react'

const PrezentationScreen: FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const videoImg = document.getElementById('prezentation')
    if (videoImg != null) {
      videoImg.onload = function () {
        setLoading(false)
      }
    }
  })

  return (
    <div className='grid-screen__wrapper'>
      {massPrez.map(item => {
        return <PrezentationCard key={item.title} {...item} />
      })}
    </div>
  )
}
export { PrezentationScreen }
