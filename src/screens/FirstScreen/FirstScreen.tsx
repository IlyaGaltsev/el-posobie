import { BOOK_ROUTE } from 'src/routesNames'
import { useNavigate } from 'react-router-dom'
import aboutApp from 'src/assets/images/title2.webp'
import aboutAuthors from 'src/assets/images/title3.png'
// import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import './FirstScreen.scss'
import { Carousel } from 'antd'
import { useRef } from 'react'
// import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/"
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai"

export const Сover = () => {
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
          <button
            className="primary-button"
            onClick={() =>
              window.open(
                'https://docs.google.com/document/d/1mW77FIHs7DN1H2TDlcz3mPJR0kEpFGx9/edit?usp=sharing&ouid=102538077575094677183&rtpof=true&sd=true',
                '_blank'
              )
            }
          >
            О проекте
          </button>
        </div>
        <p>Электронное учебно-методическое пособие</p>
      </div>
      <div>
        <p>© ФГОУ ВО «Тамбовский государственный университет имени Г.Р. Державина», 2022</p>
        <p>© Гальцев И.А., 2022</p>
      </div>
    </div>
  )
}

export const AboutApp = () => {
  return (
    <div className="firstscreen-wrapper slider-image__wrapper">
      <img src={aboutApp} alt="AboutApp" />
    </div>
  )
}

export const AboutAuthors = () => {
  return (
    <div className="firstscreen-wrapper slider-image__wrapper">
      <img src={aboutAuthors} alt="AboutAuthors" />
    </div>
  )
}

const FirstScreen = () => {
  const carouselRef = useRef<any>()

  const next = () => {
    carouselRef.current.next()
  }

  const prev = () => {
    carouselRef.current.prev()
  }
  return (
    <div>
      <Carousel ref={carouselRef}>
        <Сover />
        <AboutApp />
        <AboutAuthors />
      </Carousel>
      <button className='carousel-button__left' onClick={prev}><AiOutlineArrowLeft/></button>
      <button className='carousel-button__right' onClick={next}><AiOutlineArrowRight/></button>
    </div>
  )
}
export { FirstScreen }
