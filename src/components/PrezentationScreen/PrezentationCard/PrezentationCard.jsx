import * as S from "./PrezentationCard.styled"
import { useState } from "react"
import "./PrezentationCard.scss"
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
    <div className="prez-card__img">
      <img
        className="prez-card"
        // поменяй  id

        // src={`https://lh3.google.com/u/0/d/${id}=w416-h234-iv3`
        src={preview}
        alt="img-card"
      />
      <svg
        onClick={showModal}
        width="76"
        height="52"
        viewBox="0 0 76 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="20.5508"
          y="6.86157"
          width="38"
          height="45"
          fill="white"
        />
        <path
          d="M72.1741 4.46325C69.4632 1.29312 64.458 0 54.8993
               0H20.2013C10.4238 0 5.33389 1.37654 2.63315 4.75162C0
               8.04234 0 12.8909 0 19.6016V32.3919C0 45.3925 3.12422
               51.9932 20.2013 51.9932H54.8996C63.1888 51.9932
               67.7821 50.8522 70.7537 48.0545C73.8011 45.1856
               75.1014 40.5015 75.1014 32.3919V19.6016C75.1014
               12.5247 74.8976 7.64744 72.1741 4.46325ZM48.2153
               27.7626L32.459 35.8633C32.1068 36.0444 31.7216 36.1343
               31.3369 36.1343C30.9013 36.1343 30.4667 36.0189 30.0817
               35.7896C29.3569 35.3576 28.9143 34.5847 28.9143
               33.7511V17.6016C28.9143 16.7694 29.3557 15.9972
               30.0791 15.5649C30.8027 15.1326 31.7027 15.103
               32.4535 15.4867L48.2097 23.5353C49.0114 23.9447
               49.5148 24.7588 49.516 25.647C49.517 26.5359 49.0157
               27.3512 48.2153 27.7626Z"
        />
      </svg>
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
    </div>
  )
}
export { PrezentationCard }
