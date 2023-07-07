import { FC } from 'react'
import ContentItem from 'src/layouts/ContentItem'

const About: FC = () => {
  const aboutPdf = require('../../assets/book/about.pdf')

  return (
    <ContentItem title={'О проекте'}>
      <iframe
        title="prezentation"
        src={aboutPdf}
        allow="autoplay"
      />
    </ContentItem>
  )
}
export default About
