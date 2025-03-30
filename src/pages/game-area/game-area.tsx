import { GameAreaHeader } from '../../components/game-area/game-area-header/index'
import { GameAreaMain } from '../../components/game-area/game-area-main/game-area-main'
import { IGameArea } from '../../core/types/for-game-area'
// import { GameFooter } from '../../components/game-footer/game-footer'
import styles from './game-area.module.scss'


export const GameArea = ({}: IGameArea) => {
  return (
    <div className={styles.gameArea}>
      <GameAreaHeader />
      <GameAreaMain />
      {/* <GameFooter /> */}
    </div>
  )
}
