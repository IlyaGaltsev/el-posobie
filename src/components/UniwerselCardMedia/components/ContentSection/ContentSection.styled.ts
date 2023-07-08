import { colors } from 'src/constants/style/colors'
import { Typography } from '@mui/material'
import styled from '@emotion/styled'

export const CardContent = styled.div(() => ({
  padding: 16,
  paddingTop: 0,
  paddingBottom: 8,
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column'
}))

export const CardTag = styled(Typography)`
  color: ${colors.primaryColor};
`

export const CardTitle = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CardSubtitle = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
