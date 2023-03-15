import { Button, Card, CardActionArea, Typography } from '@mui/material'
import { device } from '../constants/style/breakpoints'
import { colors } from '../constants/style/colors'
import styled from '@emotion/styled'

export const Grid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 16px;
  column-gap: 20px;
  position: relative;

  @media (max-width: 1197px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 8px;
    column-gap: 12px;
  }
`
export const CardUnderTitle = styled(Typography)`
  color: ${colors.primaryColor};
`

export const CardTitle = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CardSubTitle = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CardButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10
}))

// interface ICardWithTab {
//   string
// }
export const CardWithTag = styled(Card)(({ tag }: any) => ({
  width: '100%',
  position: 'relative',

  '&:after': {
    content: tag,
    background: colors.primaryColor,
    color: colors.secondaryColor,
    position: 'absolute',
    margin: 10,
    top: 0,
    right: 0,
    fontSize: 16,
    fontWeight: '700',
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    borderRadius: 8
  }
}))

export const CardAction = styled(CardActionArea)(({ theme }) => ({}))

export const TitleOneLine = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
