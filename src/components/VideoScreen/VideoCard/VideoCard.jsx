import * as S from "./VideoCard.styled"
import { useState } from "react"
import { Modal } from "antd"

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
      <S.VideoCard onClick={showModal}>
        <img
          src={`//img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt={title}
        />
        <S.Title>{title}</S.Title>
      </S.VideoCard>
      <Modal
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
      </Modal>
    </>
  )
}
export { VideoCard }
