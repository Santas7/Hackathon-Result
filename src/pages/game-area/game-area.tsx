import { useState } from 'react'
import { GameAreaHeader } from '../../components/game-area/game-area-header/index'
import { GameAreaMain } from '../../components/game-area/game-area-main/game-area-main'
import { IGameArea } from '../../core/types/for-game-area'

// import { GameFooter } from '../../components/game-footer/game-footer'
import styles from './game-area.module.scss'
import { BurgerMenu } from '../../components/common/burger-menu/burger-menu'

export const GameArea = ({}: IGameArea) => {
  const [isMenu, setIsMenu] = useState(false)
  return (
    <div className={styles.gameArea}>
      <GameAreaHeader mbClick={() => setIsMenu(true)} />
      <GameAreaMain gridSize="8" players="1" theme="Icons" />
      {isMenu && <BurgerMenu closeClick={() => setIsMenu(false)} />}
    </div>
  )
}
