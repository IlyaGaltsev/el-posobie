import { device } from "../../constants/style/breakpoints"
import styled from "styled-components"
import { Button, ListItemButton, Typography } from "@mui/material"

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
  // font-weight: 700;
  // font-size: 16px;
  // height: 42px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const VideoModal = styled.iframe`
  width: 100%;
  height: calc(100vh - 64px);

  // @media (max-width: 640px) {
  //   min-height: 200px;
  //   height: 200px;
  //   width: 100%;
  //   max-height: 300px;
  // }

  // &__img {
  //   position: relative;

  //   svg {
  //     fill: $contrast;
  //     position: absolute;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //     transition: 0.2s;

  //     &:hover {
  //       transform: translate(-50%, -50%) scale(1.1);
  //       cursor: pointer;
  //     }
  //   }
  // }
`

export const CardButton = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10

  // [theme.breakpoints.up("md")]: {
  // display: "flex"
  // }
}))

export const SubTitle = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
