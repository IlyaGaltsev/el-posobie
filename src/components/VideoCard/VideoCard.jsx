import * as S from "./VideoCard.styled"
import { useState } from "react"
import { Modal } from "antd"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { MdClose } from "react-icons/md"
import { AppBar, Dialog, IconButton, Toolbar } from "@mui/material"
import Slide from "@mui/material/Slide"
import * as React from "react"

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
    />
  )
})

const VideoCard = ({ id, promo, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {/* <S.VideoCard onClick={showModal}>
        <img
          id="video"
          src={`//img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt={title}
        />
        <S.Title>{title}</S.Title>
      </S.VideoCard> */}
      <Card onClick={showModal}>
        <CardMedia
          id="video"
          component="img"
          alt={title}
          height="174"
          image={`//img.youtube.com/vi/${id}/hqdefault.jpg`}
        />
        <CardContent>
          <S.Title
            gutterBottom
            variant="h6"
            component="div"
          >
            {title}
          </S.Title>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Воспроизвести</Button>
        </CardActions>
      </Card>
      <Dialog
        fullScreen
        open={isModalOpen}
        onClose={handleOk}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleOk}
              aria-label="close"
            >
              <MdClose />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
            >
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        {isModalOpen && (
          <S.VideoModal
            title="video"
            src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
            allowfullscreen="true"
            allow="autoplay"
          />
        )}
      </Dialog>
      {/* <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"100%"}
        footer={null}
        style={{ top: 50 }}
        destroyOnClose={true}
      >
        <S.VideoModal
          title="video"
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
          allowfullscreen="true"
          allow="autoplay"
        />
      </Modal> */}
    </>
  )
}
export { VideoCard }
