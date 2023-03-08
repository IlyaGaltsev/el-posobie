import { AppBar, Card, CardActionArea, Dialog, IconButton, Toolbar } from "@mui/material"
import * as P from "../../styled/PublicComponents.styled"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import * as S from "./PrezentationCard.styled"
import { MdClose } from "react-icons/md"
import Slide from "@mui/material/Slide"
import { FaPlay } from "react-icons/fa"
import { useState } from "react"
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

const PrezentationCard = ({ id, path, preview, tag, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Card onClick={showModal}>
        <CardActionArea>
          <CardMedia
            id="prezentation"
            component="img"
            alt={title}
            height="174"
            style={{ objectPosition: "top" }}
            image={preview}
          />
          <CardContent>
            <P.CardUnderTitle>{tag}</P.CardUnderTitle>
            <P.CardTitle
              gutterBottom
              variant="h6"
              component="div"
            >
              {title}
            </P.CardTitle>
            <P.CardButton size="small">
              <FaPlay />
              Воспроизвести
            </P.CardButton>
          </CardContent>
        </CardActionArea>
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
            <P.TitleOneLine
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
            >
              {title}
            </P.TitleOneLine>
          </Toolbar>
        </AppBar>
        {isModalOpen && (
          <S.PrezentationModal
            title={title}
            src={path}
            frameBorder="0"
            allowFullScreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          />
        )}
      </Dialog>
    </>
  )
}
export { PrezentationCard }
