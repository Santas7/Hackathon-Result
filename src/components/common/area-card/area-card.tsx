import { IAreaCardProps } from '../../../core/types/for-common'

import styles from './area-card.module.scss'

export const AreaCard = ({ n, onClick }: IAreaCardProps) => {
  const isFlipped = n === null

  return (
    <div className={`${styles.areaCard} ${isFlipped ? styles.flipped : ''}`} onClick={onClick}>
      <div className={styles.cardInner}>
        <div className={styles.front}>{n ?? ''}</div>
        <div className={styles.back}></div>
      </div>
    </div>
  )
}
