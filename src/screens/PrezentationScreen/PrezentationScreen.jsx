import { useState } from "react";
import massPrez from "../../assets/data/massPrez";
import { prezTabs } from "../../assets/data/prezTabs";
import { PrezentationCard } from "../../components/PrezentationScreen/PrezentationCard";
import { Tabs } from "../../components/Tabs";
import "./PrezentationScreen.scss";

const PrezentationScreen = () => {
  const [stateVideoTabs, setStateVideoTabs] = useState(prezTabs);
  const handleClickTab = (e) => {
    let defaultMass = [
      {
        id: 0,
        flag: false,
        title: 'Все',
        tag: '',
      },
      {
        id: 1,
        flag: false,
        title: 'ВМП',
        tag: 'vmp',
      },
      {
        id: 2,
        flag: false,
        title: 'ОБВС',
        tag: 'obvs',
      },
      {
        id: 3,
        flag: false,
        title: 'ОВУ',
        tag: 'oby',
      },
      {
        id: 4,
        flag: false,
        title: 'Огневая подготовка',
        tag: 'fire',
      },
      {
        id: 5,
        flag: false,
        title: 'ТП',
        tag: 'tp',
      },
    ]
    defaultMass.forEach(item => {
      if (item.id == e.target.id) {
        item.flag = true;
      }
    })
    setStateVideoTabs(defaultMass);
  }
  return (
    <div className="prezentation-screen">
      <div className="prezentation-screen__wrapper">
        <Tabs
          stateVideoTabs={stateVideoTabs}
          handleClickTab={handleClickTab}
        />
        <div className="prezentation-screen__prezentation">
          {massPrez
            .filter(item => item.tag.includes(stateVideoTabs.find(tab => tab.flag === true).tag))
            .map(item => {
            return (
              <PrezentationCard
                key={item.id}
                {...item}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
export { PrezentationScreen };