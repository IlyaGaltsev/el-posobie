import "./Header.scss";

const Header = ({stateTabs, handleClickTab}) => {
  return (
    <header>
      <div className="header__wrapper">
        <h1>Подготовка по основам военной службы в ходе проведения учебных сборов</h1>
        <p>Учебно-методическое пособие</p>
        <nav>
          <div id="0" onClick={handleClickTab} className={`header__tab ${stateTabs[0] ? 'current__tab' : null}`}>Учебник</div>
          <div id="1" onClick={handleClickTab} className={`header__tab ${stateTabs[1] ? 'current__tab' : null}`}>Видео</div>
          <div id="2" onClick={handleClickTab} className={`header__tab ${stateTabs[2] ? 'current__tab' : null}`}>Презентация</div>
        </nav>
      </div>
    </header>
  )
}
export { Header };