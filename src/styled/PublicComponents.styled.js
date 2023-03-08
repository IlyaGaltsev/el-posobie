import { Button, Card, CardActionArea, Typography } from "@mui/material"
import { device } from "../constants/style/breakpoints"
import { colors } from "../constants/style/colors"
import styled from "styled-components"

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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10
}))

export const CardWithTag = styled(Card)`
  width: 100%;
  position: relative;

  &::after {
    content: "${({ tag }) => tag}";
    background: ${colors.primaryColor};
    color: ${colors.secondaryColor};
    position: absolute;
    margin: 10px;
    top: 0;
    right: 0;
    font-size: 16px;
    font-weight: 700;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    border-radius: 8px;
  }
`

export const CardAction = styled(CardActionArea)(({ theme }) => ({}))

export const TitleOneLine = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
