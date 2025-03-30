import { useState } from 'react'
import { useGameTime } from '../../core/hooks/use-game-timer'
import { GameTimer } from '../../components/game-timer'

export const TestTimer = () => {
  const [isGameRunning] = useState(true) 
  const { formattedTime, resetTime } = useGameTime(isGameRunning)

  return <GameTimer time={formattedTime} movesTaken={4} />
}
