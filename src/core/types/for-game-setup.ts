export interface IGameSettings {
  theme: 'Numbers' | 'Icons'
  players: '1' | '2' | '3' | '4'
  gridSize: '4' | '6' | '8'
}

export interface ISelectOptionProps {
  options: string[]
  selectedOption: string
  onSelect: (option: string) => void
}

export type ThemeType = 'Numbers' | 'Icons';
export type PlayerCountType = '1' | '2' | '3' | '4';
export type GridSizeType = '4' | '6' | '8';


export type DefaultSettingsType = {
  theme: ThemeType;
  players: PlayerCountType;
  gridSize: GridSizeType;
}