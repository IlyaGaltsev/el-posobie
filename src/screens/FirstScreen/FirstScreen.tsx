import { BOOK_ROUTE } from 'src/routesNames'
import { useNavigate } from 'react-router-dom'
import './FirstScreen.scss'

const FirstScreen = () => {
  const navigate = useNavigate()

  return (
    <div className="firstscreen-wrapper">
      <p>
        Федеральное государственное бюджетное образовательное учреждение высшего образования
        «Тамбовский государственный университет имени Г.Р. Державина»
      </p>
      <div className="firstscreen-center-box">
        <p style={{ marginBottom: 60 }}>
          Г.С. Богомолов, А.Н. Лосев, С.В. Новиков, С.А. Гатальский, М.Н. Лосева, А.А. Иванков
        </p>
        <h2 style={{ marginBottom: 40 }}>
          <strong>ПОДГОТОВКА ПО ОСНОВАМ ВОЕННОЙ СЛУЖБЫ В ХОДЕ ПРОВЕДЕНИЯ УЧЕБНЫХ СБОРОВ</strong>
        </h2>
        <div className="firstscreen-action-buttons">
          <button className="primary-button" onClick={() => navigate(`${BOOK_ROUTE}/0`)}>
            К содержанию
          </button>
          <button className="primary-button">О проекте</button>
        </div>
        <p>Электронное учебно-методическое пособие</p>
      </div>
      <p>© ФГОУ ВО «Тамбовский государственный университет имени Г.Р. Державина», 2022</p>
    </div>
  )
}
export { FirstScreen }
