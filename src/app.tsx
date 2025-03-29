import { GameTimer } from './components/game-timer/game-timer'
import { GameSetup } from './pages/game-setup'
import { TestTimer } from './pages/test-timer/TestTimer'

export const App = () => {
  
  return (
    <div>
      {/* <GameSetup /> */}
      {/* <GameTimer 
        time="01:22"
        movesTaken={4}
      /> */}
      <TestTimer />
    </div>
  )
}
