import { useParams } from 'react-router-dom'
import { massConspects } from 'src/assets/data/massConspects'
import ContentItem from 'src/layouts/ContentItem'

const ConspectItem = () => {
  const params = useParams()

  const { title, path }: any = massConspects.find((item: any) => item.id === params.id)

  return (
    <ContentItem title={title}>
      <iframe
        title="prezentation"
        src={path}
        allow="autoplay"
      />
    </ContentItem>
  )
}

export default ConspectItem
