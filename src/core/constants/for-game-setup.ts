import { IGameSettings, ISettings } from '../types/for-game-setup'

export const settings: ISettings = {
  themes: ['Numbers', 'Icons'],
  players: ['1'], //  ['1', '2', '3', '4']
  gridSizes: ['4', '6', '8'],
}

export const defaultSettings: IGameSettings = {
  theme: 'Numbers',
  players: '1',
  gridSize: '4',
}
