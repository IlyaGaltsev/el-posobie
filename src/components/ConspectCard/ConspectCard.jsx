import * as S from "./ConspectCard.styled"

const ConspectCard = ({ id, title }) => {
  return (
    <S.ConspectCard
      href={`https://docs.google.com/document/d/${id}/edit?usp=sharing&ou32858117889381065&rtpof=true&sd=true`}
    >
      <S.IconDoc size={40}/>
      <S.Title>{title}</S.Title>
    </S.ConspectCard>
  )
}
export { ConspectCard }
