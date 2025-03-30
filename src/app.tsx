import { GameTimer } from './components/game-timer/game-timer'
import { GameArea } from './pages/game-area'
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
      <GameArea />
    </div>
  )
}
