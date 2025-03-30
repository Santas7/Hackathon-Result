import { AreaButton } from '../../common/area-button'
import { IGameAreaHeaderProps } from '../../../core/types/for-game-area'

import styles from './game-area-header.module.scss'

export const GameAreaHeader = ({}: IGameAreaHeaderProps) => {
  return (
    <header className={styles.header}>
      <img src="/public/img/svg/memoryLogo.svg" alt="" />
      <div className={styles.headerBtns}>
        <AreaButton buttonText="Restart" onClick={() => {}} />
        <AreaButton buttonText="New Game" onClick={() => {}} />
      </div>
      <div className={styles.mobileMenu}>
        <AreaButton buttonText="Menu" onClick={() => {}} />
      </div>
    </header>
  )
}
