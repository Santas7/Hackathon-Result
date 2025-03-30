import { AreaButton } from '../../common/area-button'
import { IGameAreaHeaderProps } from '../../../core/types/for-game-area'

import styles from './game-area-header.module.scss'
import { useNavigate } from 'react-router-dom'

export const GameAreaHeader = ({ mbClick }: IGameAreaHeaderProps) => {
  const navigate = useNavigate()
  const handleNewGame = () => {
    navigate('/dashboard-page')
  }
  const handleRestart = () => {
    navigate('/game-area-page')
    window.location.reload()
  }

  return (
    <header className={styles.header}>
      <img src="/public/img/svg/memoryLogo.svg" alt="" />
      <div className={styles.headerBtns}>
        <AreaButton buttonText="Restart" onClick={handleRestart} />
        <AreaButton buttonText="New Game" onClick={handleNewGame} />
      </div>
      <div className={styles.mobileMenu}>
        <button onClick={mbClick}>Menu</button>
      </div>
    </header>
  )
}
