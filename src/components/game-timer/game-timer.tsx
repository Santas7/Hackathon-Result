import { FC } from 'react'
import { IGameTimerProps } from '../../core/types/for-game-timer'
import styles from './game-timer.module.scss'

export const GameTimer: FC<IGameTimerProps> = ({ time, movesTaken }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.panelsContainer}>
        <div className={styles.panel}>
          <div>Time</div>
          <div className={styles.statValue}>{time}</div>
        </div>
        <div className={styles.panel}>
          <div>Moves</div>
          <div className={styles.statValue}>{movesTaken}</div>
        </div>
      </div>
    </div>
  )
}
