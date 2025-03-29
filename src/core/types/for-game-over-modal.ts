export interface IGameOverModalProps {
  timeElapsed: string
  movesTaken: number
  onRestart: () => void
  onNewGame: () => void
}
