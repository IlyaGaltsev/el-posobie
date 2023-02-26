import strelka from "../../assets/icons/next.svg"
import { useState } from "react"
import "./DropDown.scss"

const DropDown = ({ title, items, openPage }) => {
  const [state, setState] = useState(false)

  return (
    <div className="drop-down">
      <div
        className="drop-down__title"
        onClick={() => setState(!state)}
      >
        {title}
        <img
          className={state ? "rotate-strelka" : ""}
          src={strelka}
          alt="^"
        />
      </div>
      {state && (
        <div className="drop-down__body">
          {items.map(item => (
            <button onClick={() => openPage(item.id)}>{item.title}</button>
          ))}
        </div>
      )}
    </div>
  )
}
export { DropDown }
