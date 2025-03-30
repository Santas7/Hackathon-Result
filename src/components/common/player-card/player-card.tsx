import { IPlayerCardProps } from '../../../core/types/for-common'

import styles from './player-card.module.scss'


export const PlayerCard = ({ playerName, playerPoint }: IPlayerCardProps) => {
  return (
    <div className={styles.playerCard}>
      <h4>{playerName}</h4>
      <h3>{playerPoint}</h3>
    </div>
  )
}
