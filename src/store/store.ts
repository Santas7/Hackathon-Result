import { configureStore } from '@reduxjs/toolkit'

import { authApi } from './api/auth-api'
import gameSetupReducer from './reducers/game-setup' 

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    gameSetup: gameSetupReducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch