import { Button } from './UI/Button'

interface IGameHeaderProps {}

export const GameHeader = ({}: IGameHeaderProps) => {
  return (
    <header>
      <img src="/public/img/svg/memoryLogo.svg" alt="" />
      <div className="headerBtns">
        <Button buttonText="Restart" onClick={() => {}} />
        <Button buttonText="New Game" onClick={() => {}} />
      </div>
    </header>
  )
}
