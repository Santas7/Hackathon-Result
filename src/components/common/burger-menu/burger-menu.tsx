import { useNavigate } from 'react-router-dom';
import { IBurgerMenu } from '../../../core/types/for-common'
import { ActionButton } from '../action-button'
import styles from './burger-menu.module.scss'

export const BurgerMenu = ({ closeClick }: IBurgerMenu) => {
  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate('/dashboard-page')
  }
  const handleRestart = () => {
    navigate('/game-area-page')
    window.location.reload()
  }
  
  return (
    <div className={styles.burgerMenuWrapper}>
      <div className={styles.container}>
        <ActionButton onClick={handleRestart} variant="orange" children="Restart" />
        <ActionButton onClick={handleNewGame} variant="secondary" children="New Game" />
        <ActionButton onClick={closeClick} variant="secondary" children="Resume Game" />
      </div>
    </div>
  )
}
