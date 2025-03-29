export interface IGameSettings {
  theme: string
  players: string
  gridSize: string
}

export interface ISelectOptionProps {
  options: string[]
  selectedOption: string
  onSelect: (option: string) => void
}
