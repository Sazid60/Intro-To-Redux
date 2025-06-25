import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice"
export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// a TypeScript type utility for defining the overall shape of your Redux store's state.
// store.getState(); returns  { counter: { count: 5 }, user: { name: "Sazid" } }

export type AppDispatch = typeof store.dispatch
//it's used to get the correct type of the Redux dispatch function from your configured store.