import { TBottomNavigationButtonContent } from '@/types'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const BottomNavigationButtonContent = ({ position }: TBottomNavigationButtonContent) => {
  if (position === 'left')
    return (
      <>
        <AiOutlineArrowLeft /> Назад
      </>
    )

  return (
    <>
      Далее <AiOutlineArrowRight />
    </>
  )
}

export default BottomNavigationButtonContent
