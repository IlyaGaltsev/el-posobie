import "./Header.scss";

const Header = (props) => {
  const {stateTabs, handleClickTab} = props;

  return (
    <header>
      <div className="header__wrapper">
        <h1>
          Подготовка по основам военной
          службы в ходе проведения
          учебных сборов
        </h1>
        <p>Учебно-методическое пособие</p>
        <nav>
          <div
            id="0"
            onClick={handleClickTab}
            className={stateTabs[0] ? 'current__tab' : null}>
            Учебник
          </div>
          <div
            id="1"
            onClick={handleClickTab}
            className={stateTabs[1] ? 'current__tab' : null}>
            Видео
          </div>
          <div
            id="2"
            onClick={handleClickTab}
            className={stateTabs[2] ? 'current__tab' : null}>
            Презентации
          </div>
          <div
            id="3"
            onClick={handleClickTab}
            className={stateTabs[3] ? 'current__tab' : null}>
            Конспекты
          </div>
        </nav>
      </div>
    </header>
  )
}
export { Header };