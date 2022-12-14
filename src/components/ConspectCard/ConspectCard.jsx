import './ConspectCard.scss';
import document from "../../assets/icons/document.svg";

const ConspectCard = (props) => {
  const {
    title,
    path,
  } = props;

  return(
    <a
      className='conspectcard__wrapper'
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
export { ConspectCard };