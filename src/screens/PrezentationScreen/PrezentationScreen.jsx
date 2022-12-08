import "./PrezentationScreen.scss";

const PrezentationScreen = () => {
  return (
    <div className="prezentation-screen">
      <div className="prezentation-screen__wrapper">
        {/* <Tabs
          stateVideoTabs={stateVideoTabs}
          handleClickTab={handleClickTab}
        /> */}
        <div className="prezentation-screen__prezentation">
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
export { PrezentationScreen };