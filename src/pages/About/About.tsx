import { useNavigate } from 'react-router-dom'
import { Dialog, IconButton, Toolbar, AppBar } from '@mui/material'
import { MdClose } from 'react-icons/md'
import { FC } from 'react'

const About: FC = () => {
  const aboutPdf = require('../../assets/book/about.pdf')

  const navigate = useNavigate()

  return (
    <Dialog className="page-video__wrapper" fullScreen open={true} onClose={() => navigate(-1)}>
      <AppBar sx={{ position: 'relative', background: '#556832', height: 46 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate(-1)} aria-label="close">
            <MdClose />
          </IconButton>
          <h3>О проекте</h3>
        </Toolbar>
      </AppBar>
      <iframe title="prezentation" src={aboutPdf} allow="autoplay" />
    </Dialog>
  )
}
export default About