import styled from "styled-components"
import { device, maxContent } from "../constants/style/breakpoints"

export const App = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Body = styled.div`
  max-width: ${maxContent};
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    padding: 8px 12px;
  }
`
