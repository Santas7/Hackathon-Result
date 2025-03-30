import { GridSizeType, PlayerCountType, ThemeType } from './for-game-setup'

export interface IGameAreaMainProps {
  gridSize: GridSizeType
  players: PlayerCountType
  theme: ThemeType
}

export interface IGameAreaHeaderProps {
  mbClick: () => void
}

export interface IGameAreaFooterProps {}

export interface IGameArea {}
