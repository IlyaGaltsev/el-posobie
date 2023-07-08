import type { TUniwerselCardMedia } from '@/types'
import { useNavigate } from 'react-router-dom'
import { CardActionArea } from '@mui/material'

import ActionSection from './components/ActionSection'
import ImageSection from './components/ImageSection'
import ContentSection from './components/ContentSection'

import * as S from './UniwerselCardMedia.styled'

const UniwerselCardMedia = ({
  to,
  imageUrl,
  title,
  tag,
  actionTitle,
  subtitle
}: TUniwerselCardMedia) => {
  const navigate = useNavigate()

  return (
    <S.Card
      onClick={() => navigate(to)}
      tag={imageUrl ? tag : ''}
    >
      <CardActionArea>
        <ImageSection
          title={title}
          imageUrl={imageUrl}
        />
        <ContentSection
          title={title}
          imageUrl={imageUrl}
          tag={tag}
          subtitle={subtitle}
        />
      </CardActionArea>
      <ActionSection actionTitle={actionTitle} />
    </S.Card>
  )
}

export default UniwerselCardMedia
