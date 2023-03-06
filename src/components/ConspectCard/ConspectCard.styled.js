import { HiOutlineClipboardDocumentList } from "react-icons/hi2"
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
  border: 2px solid rgba(0, 0, 0, 0.5);
  padding: 10px;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.1s;

  &:hover {
    color: #03b361;;
    border: 2px solid #03b361;;
    background: #daf2e3;
  }
`

export const IconDoc = styled(HiOutlineClipboardDocumentList)`
  width: 60px;
  min-width: 60px;
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  max-width: 20rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
