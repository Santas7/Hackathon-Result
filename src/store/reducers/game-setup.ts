import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IGameSettings } from '../../core/types/for-game-setup'
import { defaultSettings } from '../../core/constants/for-game-setup'

const initialState = {
  settings: defaultSettings
}

export const gameSetupSlice = createSlice({
  name: 'gameSetup',
  initialState,
  reducers: {
    setGameSettings: (state, action: PayloadAction<IGameSettings>) => {
      state.settings = action.payload
    },
  },
})

export const { setGameSettings } = gameSetupSlice.actions
export default gameSetupSlice.reducer