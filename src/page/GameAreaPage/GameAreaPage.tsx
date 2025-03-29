import { GameAreaMain } from '../../components/GameAreaMain'
import { GameFooter } from '../../components/GameFooter'
import { GameHeader } from '../../components/GameHeader'
import './GameArea.scss'

interface IGameAreaPageProps {}

export const GameAreaPage = ({}: IGameAreaPageProps) => {
  return (
    <div className="gameArea">
      <GameHeader />
      <GameAreaMain />
      <GameFooter />
    </div>
  )
}
