import { device } from "../constants/style/breakpoints"
import styled from "styled-components"

export const Grid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 16px;
  column-gap: 20px;
  position: relative;

  @media ${device.laptopS} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 8px;
    column-gap: 12px;
  }
`

export const CenterPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background: white;
`
