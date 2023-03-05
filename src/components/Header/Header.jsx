import { headerNav } from "../../constants/headerNav"
import * as S from "./Header.styled"

const Header = ({ onChange }) => {
  return (
    <S.Header id="header">
      <S.Body>
        <S.NavMenu
          defaultSelectedKeys={["1"]}
          mode="horizontal"
          theme="dark"
          onSelect={onChange}
          items={headerNav}
        />
      </S.Body>
    </S.Header>
  )
}

export { Header }
