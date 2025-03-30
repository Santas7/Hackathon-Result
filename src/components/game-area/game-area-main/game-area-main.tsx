import { AreaCard } from '../../common/area-card/index'
import { IGameAreaMainProps } from '../../../core/types/for-game-area'

import styles from './game-area-main.module.scss'

export const GameAreaMain = ({}: IGameAreaMainProps) => {
  return (
    <div className={styles.gameAreaMain}>
      {Array.from({ length: 36 }, (_, index) => (
        <AreaCard key={index} />
      ))}
    </div>
  )
}
