import "./Tabs.scss";

const Tabs = ({stateVideoTabs, handleClickTab}) => {
  return (
    <div className="tabs__wrapper">
      {stateVideoTabs.map(item => {
        return (
          <div 
            key={item.id} 
            id={item.id}
            onClick={handleClickTab} 
            className={`tab__video ${item.flag ? 'tab__video_current' : null}`}>
            { item.title }
          </div>
        )
      })} 
    </div>
  )
}
export { Tabs };