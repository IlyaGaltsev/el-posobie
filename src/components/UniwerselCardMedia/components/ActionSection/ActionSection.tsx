import type { TActionSection } from '@/types'
import { FaPlay } from 'react-icons/fa'
import * as S from './ActionSection.styles'

const ActionSection = ({ actionTitle }: TActionSection) => {
  return (
    <S.ActionSection>
      <S.CardButton size="small">
        <FaPlay />
        {actionTitle ? actionTitle : 'Воспроизвести'}
      </S.CardButton>
    </S.ActionSection>
  )
}

export default ActionSection
