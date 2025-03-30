import { useState } from 'react'

export const useGameMove = () => {
  const [movesTaken, setMovesTaken] = useState(0)

  const incrementMoves = () => {
    setMovesTaken((prev) => prev + 1)
  }

  const resetMoves = () => {
    setMovesTaken(0)
  }

  return { movesTaken, incrementMoves, resetMoves }
}
