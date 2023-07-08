import type { TContentSection } from '@/types'
import * as S from './ContentSection.styled'

const ContentSection = ({ imageUrl, tag, title, subtitle }: TContentSection) => {
  return (
    <S.CardContent>
      {imageUrl ? null : <S.CardTag>{tag}</S.CardTag>}
      <S.CardTitle gutterBottom variant="h6">
        {title}
      </S.CardTitle>
      {subtitle ? (
        <S.CardSubtitle variant="body2" color="text.secondary">
          {subtitle}
        </S.CardSubtitle>
      ) : null}
    </S.CardContent>
  )
}

export default ContentSection
