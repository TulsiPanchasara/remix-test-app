import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './createStore';
import toDoListReducer from "./reducer";


// export default configureStore({
//     reducer: {
//     toDoReducer: toDoListReducer,
//     store: counterReducer
//   }
// })

export default combineReducers({
  toDoListReducer,
  counterReducer
})