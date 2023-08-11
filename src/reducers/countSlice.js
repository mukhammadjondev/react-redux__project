import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: 'count',
  initialState: {count: 0},
  reducers: {
    plusCounter: state => {
      state.count += 1
    },
    minusCounter: state => {
      state.count -= 1
    },
    resetCount: state => {
      state.count = 0
    }
  }
})

export const {plusCounter, minusCounter, resetCount} = countSlice.actions
export default countSlice.reducer