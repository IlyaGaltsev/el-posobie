import massPrez from "../../assets/data/massPrez"
import { PrezentationCard } from "../../components/PrezentationScreen/PrezentationCard"
import "./PrezentationScreen.scss"

const PrezentationScreen = () => {
  return (
    <div className="prezentation-screen">
      <div className="prezentation-screen__wrapper">
        <div className="prezentation-screen__prezentation">
          {massPrez.map(item => {
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
export { PrezentationScreen }
