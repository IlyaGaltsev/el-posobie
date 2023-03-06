import { device } from "../../../constants/style/breakpoints"
import styled from "styled-components"
import { IoMdPlayCircle } from "react-icons/io"

export const PrezentationCard = styled.div`
  width: 100%;
  background: blue;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  flex-direction: column;

  img {
    background: #030080;
    border-radius:10px; 
    margin-bottom: 12px;
    object-fit: contain;
    // object-position: top;
    height: 100%;
    max-height: 14rem;
    width: 100%;

    @media ${device.laptopS} {
      max-height: 10rem;
    }  
  }
`

export const PrezentationCardTools = styled.div`
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
  height: 42px;
`


export const PrezentationModal = styled.iframe`
  width: 100%;
  height: 90vh;
  max-height: 600px;
  border: none;
  border-radius: 10px;
  min-height: 300px;

  @media ${device.mobileL} {
    min-height: 200px;
    height: 200px;
    width: 100%;
    max-height: 320px;
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
