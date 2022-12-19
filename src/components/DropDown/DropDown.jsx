import "./DropDown.scss";
import strelka from "../../assets/icons/next.svg";
import { useState } from "react";

const DropDown = (props) => {
  const { title, items, openPage } = props;

  const [state, setState] = useState(false);
  return (
    <div className="drop-down">
      <div className="drop-down__title" onClick={() => setState(!state)}>
        {title}
        <img className={state ? 'rotate-strelka' : null} src={strelka} alt="^" />
      </div>
      {state ? (
        <div className="drop-down__body">
          {items.map((item) => (
            <button onClick={() => openPage(item.id)}>{item.title}</button>
          ))}
        </div>
      ) : null}
    </div>
  );
};
export { DropDown };
