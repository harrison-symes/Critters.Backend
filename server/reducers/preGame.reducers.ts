import { createReducer, createSlice } from "@reduxjs/toolkit";
import { GameMode, IPlayer } from "../models/game.models";
import { addPlayerToRoom, playerReady } from "../actions/preGame.actions";

export interface IPreGameReducer {
  players: IPlayer[];
  gameMode: GameMode;
}

const initialState: IPreGameReducer = {
  players: [],
  gameMode: GameMode.Classic,
};

const preGameReducer = createReducer<IPreGameReducer>(
  initialState,
  (builder) => {
    builder
      .addCase(addPlayerToRoom, (state, { payload }) => ({
        ...state,
        players: [...state.players, payload],
      }))
      .addCase(playerReady, (state, { payload }) => {
        const players = state.players.map((player) => ({
          ...player,
          isReady: player.id === payload ? true : player.isReady,
        }));

        return {
          ...state,
          players,
        };
      });
  }
);

export default preGameReducer;
