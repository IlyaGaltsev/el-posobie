import type { TImageSection } from '@/types'
import { CardMedia } from '@mui/material'

const ImageSection = ({ title, imageUrl }: TImageSection) => {
  if (!imageUrl) return null
  
  return (
    <CardMedia
      component="img"
      alt={title}
      height="174"
      image={imageUrl}
    />
  )
}

export default ImageSection
