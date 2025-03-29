import { GameHeader } from '../../components/game-area-header/index'
import { GameAreaMain } from '../../components/game-area-main/game-area-main'
// import { GameFooter } from '../../components/game-footer/game-footer'
import style from './GameArea.module.scss'

interface IGameAreaPageProps {}

export const GameAreaPage = ({}: IGameAreaPageProps) => {
  console.log(style)

  return (
    <div className={style.gameArea}>
      <GameHeader />
      <GameAreaMain />
      {/* <GameFooter /> */}
    </div>
  )
}
