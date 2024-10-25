import './scoreboard.css'
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
      <div className='score-pill player-score'>You: {playerScore}</div>
      <div className='score-pill draws-score'>Draws: {numOfDraw}</div>
      <div className='score-pill bot-score'>Boo: {botScore}</div>
    </div>
  )
}

export default Scoreboard