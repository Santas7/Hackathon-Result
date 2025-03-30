import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGameSettings } from '../../core/types/for-game-setup'
import { defaultSettings } from '../../core/constants/for-game-setup'


const loadSettingsFromStorage = (): IGameSettings => {
  try {
    const storedSettings = localStorage.getItem('gameSettings')
    if (storedSettings) {
      return JSON.parse(storedSettings) as IGameSettings
    }
    return defaultSettings
  } catch (error) {
    console.error('Error:', error)
    return defaultSettings 
  }
}

const saveSettingsToStorage = (settings: IGameSettings) => {
  try {
    localStorage.setItem('gameSettings', JSON.stringify(settings))
  } catch (error) {
    console.error('Error:', error)
  }
}

const initialState = {
  settings: loadSettingsFromStorage()
}

export const gameSetupSlice = createSlice({
  name: 'gameSetup',
  initialState,
  reducers: {
    setGameSettings: (state, action: PayloadAction<IGameSettings>) => {
      state.settings = action.payload
      saveSettingsToStorage(action.payload)
    },
   
    resetGameSettings: (state) => {
      state.settings = defaultSettings
      saveSettingsToStorage(defaultSettings)
    },
  },
})

export const { setGameSettings, resetGameSettings } = gameSetupSlice.actions
export default gameSetupSlice.reducer