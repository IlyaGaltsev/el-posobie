import { Typography } from '@mui/material'
import { device } from '../constants/style/breakpoints'
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

export const TitleOneLine = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ContentModal = styled.iframe`
  width: 100%;
  height: calc(100vh - 64px);
`
