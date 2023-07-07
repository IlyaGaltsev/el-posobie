import { IPrezentationCard } from '@/types'
import { useParams } from 'react-router-dom'
import { massPrez } from 'src/assets/data/massPrez'
import ContentItem from 'src/layouts/ContentItem'

const PrezentationItem = () => {
  const params = useParams()

  const { title, localPath }: IPrezentationCard | any = massPrez.find(
    (item: IPrezentationCard) => item.id === params.id
  )

  return (
    <ContentItem title={title}>
      <iframe
        title="prezentation"
        src={localPath}
        allow="autoplay"
      />
    </ContentItem>
  )
}

export default PrezentationItem
