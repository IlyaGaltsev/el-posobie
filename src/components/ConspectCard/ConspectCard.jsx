import { HiOutlineClipboardDocumentList } from "react-icons/hi2"
import * as S from "./ConspectCard.styled"

const ConspectCard = ({ id, title, path }) => {
  return (
    <S.ConspectCard href={path}>
      <HiOutlineClipboardDocumentList size={40} />
      <S.Title>{title}</S.Title>
    </S.ConspectCard>
  )
}
export { ConspectCard }
