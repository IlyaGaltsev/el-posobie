import styled from "styled-components"
import { maxContent } from "../constants/style/breakpoints"

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
`
