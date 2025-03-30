export interface IGameTimerProps {
  time: string
  movesTaken: number
  isTimeUp?: boolean
  onReset?: () => void
}
