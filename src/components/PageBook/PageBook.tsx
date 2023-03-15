import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { Button, Typography } from 'antd'
import * as S from './PageBook.styled'
import './PageBook.scss'

const { Title } = Typography

interface IPageBook {
  timeRead: string
  chapter: string
  id: number
  title: string
  onPrev: () => void
  onNext: () => void
  text: any
  // text: () => Element
  minLenght: number
  maxLenght: number
}

const PageBook = ({
  timeRead,
  chapter,
  id,
  title,
  onPrev,
  text,
  onNext,
  minLenght,
  maxLenght
}: IPageBook) => {
  return (
    <div className="pagebook">
      <div id="top"></div>
      <div className="pagebook__wrapper">
        <span>Читается за {timeRead} мин</span>
        <Title level={2}>{chapter}</Title>
        <Title level={2}>{title}</Title>
        {text()}
      </div>
      <S.PagesNavBar>
        {minLenght !== id && (
          <Button onClick={onPrev} type="primary">
            <MdArrowBackIosNew style={{ marginRight: 8 }} />
            Назад
          </Button>
        )}
        {maxLenght !== id && (
          <Button type="primary" onClick={onNext}>
            Далее
            <MdArrowForwardIos style={{ marginLeft: 8 }} />
          </Button>
        )}
      </S.PagesNavBar>
    </div>
  )
}
export { PageBook }
