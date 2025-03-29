export type ThemeType = 'Numbers' | 'Icons'
export type PlayerCountType = '1' | '2' | '3' | '4'
export type GridSizeType = '4' | '6' | '8'

export interface ISettings {
  themes: ThemeType[]
  players: PlayerCountType[]
  gridSizes: GridSizeType[]
}

export interface IGameSettings {
  theme: ThemeType
  players: PlayerCountType
  gridSize: GridSizeType
}

export interface ISelectOptionProps {
  options: string[]
  selectedOption: string
  onSelect: (option: string) => void
}
