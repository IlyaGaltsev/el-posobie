import { colors } from 'src/constants/style/colors'
import { Card as refCard } from '@mui/material'
import styled from '@emotion/styled'

interface ICardStyles {
  tag?: string
}

export const Card = styled(refCard)(({ tag }: ICardStyles) => ({
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '&:after': {
    content: `'${tag}'`,
    background: tag && '#ffffff',
    boxShadow: tag && `rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px`,
    color: colors.secondaryColor,
    position: 'absolute',
    margin: 10,
    top: 120,
    right: 0,
    fontSize: 15,
    fontWeight: '700',
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    borderRadius: 8
  },
}))
