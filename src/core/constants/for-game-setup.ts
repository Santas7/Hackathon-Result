import { 
    DefaultSettingsType,
    GridSizeType, 
    PlayerCountType, 
    ThemeType 
} from "../types/for-game-setup"


export const allSettings: {
  themes: ThemeType[]
  playerCount: PlayerCountType[]
  gridSizes: GridSizeType[]
} = {
  themes: ['Numbers', 'Icons'],
  playerCount: ['1'], //  ['1', '2', '3', '4']
  gridSizes: ['4', '6', '8'],
}

export const defaultSettings: DefaultSettingsType  = {
    theme: 'Numbers',
    players: '1',
    gridSize: '4',
}