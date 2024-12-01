import { Action, configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/postsSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})

export type AppStore = typeof store

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
