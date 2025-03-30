import style from './game-area-main.module.scss'
import { AreaCard } from '../common/area-card/index'

interface IGameAreaMainProps {}

export const GameAreaMain = ({}: IGameAreaMainProps) => {
  return (
    <div className={style.gameAreaMain}>
      {Array.from({ length: 36 }, (_, index) => (
        <AreaCard key={index} />
      ))}
    </div>
  )
}
