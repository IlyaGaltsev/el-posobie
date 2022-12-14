import "./ConspectScreen.scss";
// import prez1 from "https://docs.google.com/presentation/d/1E8F9WbKUQ-1PQeiT-b2gOZIcLlGxA5ab/edit?usp=sharing&ouid=109532858117889381065&rtpof=true&sd=true"
const ConspectScreen = () => {
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
export { ConspectScreen };