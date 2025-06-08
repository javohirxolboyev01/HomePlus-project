import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from './feature/wishliswt_slice'


export const store = configureStore({
  reducer: {
  },
})

// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch