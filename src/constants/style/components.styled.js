import styled from "styled-components"
import { device } from "./breakpoints"

export const Grid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 16px;
  column-gap: 20px;

  @media ${device.laptopS} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 8px;
    column-gap: 12px;
  }
`
