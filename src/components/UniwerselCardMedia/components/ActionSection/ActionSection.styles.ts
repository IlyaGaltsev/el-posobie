import { Button } from '@mui/material'
import styled from '@emotion/styled'

export const ActionSection = styled.div(() => ({
  display: 'flex',
  padding: 16,
  paddingTop: 0,
}))

export const CardButton = styled(Button)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
}))
