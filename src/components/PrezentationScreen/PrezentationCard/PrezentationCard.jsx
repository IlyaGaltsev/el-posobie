import * as S from "./PrezentationCard.styled"
import { useState } from "react"
import { Modal } from "antd"

const PrezentationCard = ({ id, path, preview, title }) => {
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
      <S.PrezentationCard onClick={showModal}>
        <img
          src={preview}
          alt={title}
        />
        <S.Title>{title}</S.Title>
      </S.PrezentationCard>
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
        <S.PrezentationModal
          title={title}
          src={path}
          frameBorder="0"
          allowFullScreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />
      </Modal>
    </>
  )
}
export { PrezentationCard }
