import { device } from "../../../constants/style/breakpoints"
import styled from "styled-components"

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
