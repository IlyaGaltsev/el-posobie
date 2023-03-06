import { IoMdPlayCircle } from "react-icons/io"
import styled from "styled-components"

export const ConspectCard = styled.a`
  width: 100%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const ConspectCardTools = styled.div`
  z-index: 1000;
  display: flex;
  padding: 10px 20px;

  width: 100%;
  align-items: center;
  color: white;
  background: rgb(2, 0, 36);
  background: linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, rgba(0, 0, 0, 1) 100%);
`

export const IconPlay = styled(IoMdPlayCircle)`
  width: 80px;
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
//   height: 42px;
// max-width: 10rem;
`

export const ConspectModal = styled.iframe`
  width: 100%;
  height: 90vh;
  max-height: 600px;
  border: none;
  border-radius: 10px;
  min-height: 300px;
  background-color: gray;

  @media (max-width: 640px) {
    min-height: 200px;
    height: 200px;
    width: 100%;
    max-height: 300px;
  }

  &__img {
    position: relative;

    svg {
      fill: $contrast;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 0.2s;

      &:hover {
        transform: translate(-50%, -50%) scale(1.1);
        cursor: pointer;
      }
    }
  }
`
