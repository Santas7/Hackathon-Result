import { PlayerCard } from './UI/PlayerCard'

const playerArray: { name: string; point: number }[] = [
  { name: 'player 1', point: 3 },
  { name: 'player 2', point: 3 },
  { name: 'player 3', point: 3 },
  { name: 'player 4', point: 3 },
]
export const GameFooter = () => {
  return (
    <footer>
      {playerArray &&
        playerArray.length &&
        playerArray.map((e) => <PlayerCard playerName={e.name} playerPoint={e.point} />)}
    </footer>
  )
}
