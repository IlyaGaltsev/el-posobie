import { useState } from "react";
import { Tabs } from "../../components/VideoScreen/Tabs";
import { VideoCard } from "../../components/VideoScreen/VideoCard";
import massVideo from "../../assets/data/massVideo"
import "./VideoScreen.scss";
import videoTabs from "../../assets/data/videoTabs";

const VideoScreen = () => {
  const [stateVideoTabs, setStateVideoTabs] = useState(videoTabs)
  const handleClickTab = (e) => {
    let defaultMass = [
      {
        id:0,
        flag: false,
        title: 'Медицинская подготовка',
        tag: 'med',
      },
      {
        id:1,
        flag: false,
        title: 'Огневая подготовка',
        tag: 'fire',
      },
      {
        id:2,
        flag: false,
        title: 'РХБ',
        tag: 'rxb',
      },
      {
        id:3,
        flag: false,
        title: 'Тактическая подготовка',
        tag: 'tacktic',
      },
      {
        id:4,
        flag: false,
        title: 'Физическая подготовка',
        tag: 'fizik',
      },
    ]
    defaultMass.map(item => {
      if (item.id == e.target.id) {
        item.flag = true;
      }
    })
    setStateVideoTabs(defaultMass);
  }
  return (
    <div className="video-screen">
      <div className="video-screen__wrapper">
        <Tabs
          stateVideoTabs={stateVideoTabs}
          handleClickTab={handleClickTab}
        />
        <div className="video-screen__videos">
          {massVideo
            .filter(item => item.tag === stateVideoTabs.find(tab => tab.flag === true).tag)
            .map(item => {
            return (
              <VideoCard key={item.id} {...item}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export { VideoScreen };