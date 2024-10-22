import { RootState } from "../../../../store"
import { useSelector } from "react-redux"

const Scoreboard = () => {

  const { 
    playerScore, 
    numOfDraw, 
    botScore 
  } = useSelector((state: RootState) => state.game)

  return (
    <div className="scoreboard">
      <div>You: {playerScore}</div>
      <div>Draws: {numOfDraw}</div>
      <div>Bot: {botScore}</div>
    </div>
  )
}

export default Scoreboard