import "./ConspectScreen.scss";
import { ConspectCard } from "../../components/ConspectCard";
import { Tabs } from "../../components/Tabs";
import { useState } from "react";
import massConspects from "../../assets/data/massConspects";
import { conspectTabs } from "../../assets/data/conspectTabs";

const ConspectScreen = () => {
  const [stateVideoTabs, setStateVideoTabs] = useState(conspectTabs);
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
        title: 'Строевая подготовка',
        tag: 'sp',
      },
      {
        id: 2,
        flag: false,
        title: 'Тактическая подгтовка',
        tag: 'tp',
      },
      {
        id: 3,
        flag: false,
        title: 'РХБЗ',
        tag: 'rxbz',
      },
      {
        id: 4,
        flag: false,
        title: 'ОВУ',
        tag: 'oby',
      },
      {
        id: 5,
        flag: false,
        title: 'ВМП',
        tag: 'tp',
      },
      {
        id: 6,
        flag: false,
        title: 'Огневая подготовка',
        tag: 'fire',
      },
      {
        id: 7,
        flag: false,
        title: 'Физическая подготовка',
        tag: 'fizik',
      },
      {
        id: 8,
        flag: false,
        title: 'ОБВС',
        tag: 'obvs',
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
          {
            massConspects
              .filter(item => item.tag.includes(stateVideoTabs.find(tab => tab.flag === true).tag))
              .map(item => {
              return(
                <ConspectCard
                  key={item.id}
                  {...item}
                />
              )
            })
          }
          {/* {massVideo
            .filter(item => item.tag === stateVideoTabs.find(tab => tab.flag === true).tag)
            .map(item => {
            return (
              <VideoCard key={item.id} {...item}/>
            )
          })} */}
        </div>
      </div>
    </div>
  )
}
export { ConspectScreen };