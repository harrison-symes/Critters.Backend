import { createAction } from "@reduxjs/toolkit";
import { IPlayer } from "../models/game.models";
import { IPreGameReducer } from "../reducers/preGame.reducers";

export const startGame = createAction<IPreGameReducer>("game/StartGame");

export const targetCard = createAction<{
  cardId: string | undefined;
  playerId: string;
}>("game/TargetCard");
