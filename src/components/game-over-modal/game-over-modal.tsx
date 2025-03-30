import { FC } from 'react'

import { ActionButton } from '../common/action-button'
import { IGameOverModalProps } from '../../core/types/for-game-over-modal'

import styles from './game-over-modal.module.scss'

export const GameOverModal: FC<IGameOverModalProps> = ({
  timeElapsed,
  movesTaken,
  onRestart,
  onNewGame,
}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>You did it!</h2>
        <p className={styles.subtitle}>Game over! Here's how you got on...</p>
        <div className={styles.panel}>
          <div className={styles.stat}>
            <span>Time Elapsed</span>
            <strong className={styles.statValue}>{timeElapsed}</strong>
          </div>
          <div className={styles.stat}>
            <span>Moves Taken</span>
            <strong className={styles.statValue}>{movesTaken} Moves</strong>
          </div>
        </div>
        <div className={styles.buttons}>
          <ActionButton onClick={onRestart} variant="orange">
            Restart
          </ActionButton>
          <ActionButton onClick={onNewGame} variant="secondary">
            Setup New Game
          </ActionButton>
        </div>
      </div>
    </div>
  )
}
