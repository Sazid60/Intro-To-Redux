import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // through state we will get the initial state value
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            state.count = state.count - 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer;