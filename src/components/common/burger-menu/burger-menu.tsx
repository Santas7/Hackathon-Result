import { ActionButton } from '../action-button'
import styles from './burger-menu.module.scss'
interface SBurgerMenu {
  closeClick: () => void
}
export const BurgerMenu = ({ closeClick }: SBurgerMenu) => {
  return (
    <div className={styles.burgerMenuWrapper}>
      <div className={styles.container}>
        <ActionButton onClick={() => {}} variant="orange" children="Restart" />
        <ActionButton onClick={() => {}} variant="secondary" children="New Game" />
        <ActionButton onClick={closeClick} variant="secondary" children="Resume Game" />
      </div>
    </div>
  )
}
