import { device } from '../../constants/style/breakpoints'
// import { colors } from '../../constants/style/colors'
import styled from 'styled-components'

// &::after {
//   content: "${({ tag }) => tag}";
//   background: ${colors.primaryColor};
//   color: ${colors.secondaryColor};
//   position: absolute;
//   margin: 10px;
//   top: 0;
//   right: 0;
//   font-size: 16px;
//   font-weight: 700;
//   height: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 4px 8px;
//   border-radius: 8px;
// }

export const PrezentationCard = styled.div`
  width: 100%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  flex-direction: column;

  img {
    background: #030080;
    border-radius: 10px;
    margin-bottom: 12px;
    object-fit: contain;
    height: 100%;
    max-height: 14rem;
    width: 100%;
  }

  @media ${device.laptopS} {
    img {
      max-height: 10rem;
    }
  }

  @media ${device.tablet} {
    &::after {
      font-size: 14px;
    }
  }
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  height: 42px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const PrezentationModal = styled.iframe`
  width: 100%;
  height: calc(100vh - 64px);
`
