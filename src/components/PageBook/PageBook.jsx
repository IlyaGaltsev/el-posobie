import "./PageBook.scss"

const PageBook = ({ timeRead, title, text, onNext }) => {
  return (
    <div className="pagebook">
      <div className="pagebook__wrapper">
        <span>Читается за {timeRead} мин</span>
        <h1>{title}</h1>
        {text()}
        <button onClick={onNext}>Далее</button>
      </div>
    </div>
  )
}
export { PageBook }
