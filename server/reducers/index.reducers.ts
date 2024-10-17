// server/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import preGameReducer from "./preGame.reducers";
import gameReducer from "./game.reducers";

const rootReducer = combineReducers({
  preGame: preGameReducer,
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
