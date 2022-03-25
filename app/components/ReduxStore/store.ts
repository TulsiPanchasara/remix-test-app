import { configureStore } from '@reduxjs/toolkit';
import toDoListReducer from "./reducer";


export default configureStore({
    reducer: {
      toDoReducer: toDoListReducer
  }
})