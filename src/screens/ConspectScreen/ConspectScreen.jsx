import { ConspectCard } from "../../components/ConspectCard"
import massConspects from "../../assets/data/massConspects"
import "./ConspectScreen.scss"

const ConspectScreen = () => {
  return (
    <div className="prezentation-screen">
      <div className="prezentation-screen__wrapper">
        <div className="prezentation-screen__prezentation">
          {massConspects.map(item => {
            return (
              <ConspectCard
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
export { ConspectScreen }
