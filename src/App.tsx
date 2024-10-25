import './App.css'
import PlayerChoice from './features/game/components/PlayerChoice/PlayerChoice'
import Scoreboard from './features/game/components/Scoreboard/Scoreboard'

function App() {
  return (
    <main>
      <Scoreboard />
      <div className='game'>
        <div className='bot'>👻</div>
        <div className='question'>Rock, paper, scissors? </div>
        <PlayerChoice />
      </div>
      <div></div>
    </main>
  )
}

export default App
