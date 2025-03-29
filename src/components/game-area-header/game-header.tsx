import style from './GameHeader.module.scss'
import { Button } from '../UI/area-button/area-button'

interface IGameHeaderProps {}

export const GameHeader = ({}: IGameHeaderProps) => {
  return (
    <header className={style.header}>
      <img src="/public/img/svg/memoryLogo.svg" alt="" />
      <div className={style.headerBtns}>
        <Button buttonText="Restart" onClick={() => {}} />
        <Button buttonText="New Game" onClick={() => {}} />
      </div>
      <div className={style.mobileMenu}>
        <Button buttonText="Menu" onClick={() => {}} />
      </div>
    </header>
  )
}
