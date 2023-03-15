import * as S from './Loader.styled'
import { Spin } from 'antd'

const Loader = () => {
  return (
    <S.CenterPage>
      <Spin size="large" />
    </S.CenterPage>
  )
}
export { Loader }
