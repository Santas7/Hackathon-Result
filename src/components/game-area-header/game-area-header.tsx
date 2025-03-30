import { AreaButton } from '../common/area-button'
import style from './game-area-header.module.scss'
interface IGameHeaderProps {}

export const GameAreaHeader = ({}: IGameHeaderProps) => {
  return (
    <header className={style.header}>
      <img src="/public/img/svg/memoryLogo.svg" alt="" />
      <div className={style.headerBtns}>
        <AreaButton buttonText="Restart" onClick={() => {}} />
        <AreaButton buttonText="New Game" onClick={() => {}} />
      </div>
      <div className={style.mobileMenu}>
        <AreaButton buttonText="Menu" onClick={() => {}} />
      </div>
    </header>
  )
}
