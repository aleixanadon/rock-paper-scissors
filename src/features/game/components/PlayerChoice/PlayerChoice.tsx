import useGame from '../../hooks/useGame'
import './playerChoice.css'

const PlayerChoice = () => {

  const { getBotResult } = useGame();

  return (
    <div className="player-choice">
      <button className="choice-btn" onClick={getBotResult}>👊</button>
      <button className="choice-btn">🖐</button>
      <button className="choice-btn">✌️</button>
    </div>
  )
}

export default PlayerChoice