interface IPlayerCardProps {
  playerName: string
  playerPoint: number
}

export const PlayerCard = ({ playerName, playerPoint }: IPlayerCardProps) => {
  return (
    <div className="playerCard">
      <h4>{playerName}</h4>
      <h3>{playerPoint}</h3>
    </div>
  )
}
