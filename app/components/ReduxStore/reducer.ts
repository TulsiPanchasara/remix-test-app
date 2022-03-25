// export const toDos = [
//     {
//       id: 1,
//       name: "To Do Number 1",
//       description: "This is going to be my default to do 1",
//     },
//     {
//       id: 2,
//       name: "To Do Number 2",
//       description: "This is going to be my default to do 2",
//     },
//   ];


// export default (state:any, action:any) => {
//   switch (action.type) {
//     case "rotate":
//       return {
//         rotating: action.payload
//       };
//     default:
//       return state;
//   }
// };

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state:any) => state.counter.value


export default counterSlice.reducer;