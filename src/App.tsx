import './App.css'
import PlayerChoice from './features/game/components/PlayerChoice/PlayerChoice'
import Scoreboard from './features/game/components/Scoreboard/Scoreboard'

function App() {
  return (
    <main>
      <Scoreboard />
      <div>
        <div className='bot'>👻</div>
        <div>Rock, paper, scissors? </div>
        <PlayerChoice />
      </div>
      <div></div>
    </main>
  )
}

export default App
