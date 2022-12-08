import './App.scss';
import { useState } from "react";
import { Header } from '../components/Header';
import { BookScreen } from "../screens/BookScreen";
import { PrezentationScreen } from "../screens/PrezentationScreen";
import { VideoScreen } from "../screens/VideoScreen";

function App() {
  const [stateTabs, setStateTabs] = useState({
    0: true,
    1: false,
    2: false,
  })
  const handleClickTab = (e) => {
    const id = e.target.id;
    let nullObj = {
      0: false,
      1: false,
      2: false,
    }
    setStateTabs({...nullObj, [id]: true})
  }
  return (
    <div className="app__wrapepr">
      <Header
        stateTabs={stateTabs}
        handleClickTab={handleClickTab}
      />
      {stateTabs[0] ? <BookScreen/> : stateTabs[1] ?  <VideoScreen/> : <PrezentationScreen/>}
    </div>
  );
}

export { App };
