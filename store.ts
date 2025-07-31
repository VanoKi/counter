import {combineReducers, createStore} from "redux";
import {counterReducer} from "./src/model/counter-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch