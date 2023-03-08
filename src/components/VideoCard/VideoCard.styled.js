import { device } from "../../constants/style/breakpoints"
import styled from "styled-components"
import { Typography } from "@mui/material"

export const VideoCard = styled.div`
  width: 100%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  flex-direction: column;

  img {
    border-radius: 10px;
    margin-bottom: 12px;
    object-fit: cover;
    max-height: 14rem;
    width: 100%;

    @media ${device.laptopS} {
      max-height: 10rem;
    }
  }
`

export const Title = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const VideoModal = styled.iframe`
  width: 100%;
  height: calc(100vh - 64px);
`

export const SubTitle = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
