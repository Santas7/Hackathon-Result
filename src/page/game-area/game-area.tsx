import { GameAreaHeader } from '../../components/game-area-header/index'
import { GameAreaMain } from '../../components/game-area-main/game-area-main'
// import { GameFooter } from '../../components/game-footer/game-footer'
import style from './game-area.module.scss'

interface IGameAreaPageProps {}

export const GameArea = ({}: IGameAreaPageProps) => {
  console.log(style)

  return (
    <div className={style.gameArea}>
      <GameAreaHeader />
      <GameAreaMain />
      {/* <GameFooter /> */}
    </div>
  )
}
