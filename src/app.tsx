import { GameOverModal } from './components/game-over-modal'
import { GameSetup } from './pages/game-setup'

export const App = () => {
  return (
    <div>
      <GameSetup />
      <GameOverModal
        timeElapsed="01:53"
        movesTaken={39}
        onRestart={() => {
          alert('restart!')
        }}
        onNewGame={() => {
          alert('new game!')
        }}
      />
    </div>
  )
}
