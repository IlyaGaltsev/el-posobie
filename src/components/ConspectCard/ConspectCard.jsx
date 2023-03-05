import document from "../../assets/icons/document.svg"
import "./ConspectCard.scss"

const ConspectCard = ({ title, path }) => {
  return (
    <a
      className="conspectcard__wrapper"
      href={path}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={document}
        alt="doc"
      />
      {title}
    </a>
  )
}
export { ConspectCard }
