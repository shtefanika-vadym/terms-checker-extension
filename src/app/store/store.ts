import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { authApi, authSlice } from 'features/auth'

const rootReducer = combineReducers({
  auth: authSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware: any) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }).concat(authApi),
})
