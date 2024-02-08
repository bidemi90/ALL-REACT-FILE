import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  a: 0,
}

export const counterincdec = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.a ++
    },
    decrement: (state) => {
      state.a --
    },
    incrementbyvalue:(state,actions)=>{
      state.a += actions.payload
    }
  },
})

export const { increment, decrement,  incrementbyvalue} = counterincdec.actions

export default counterincdec.reducer