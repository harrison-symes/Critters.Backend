import { createAction } from "@reduxjs/toolkit";
import { IPlayer } from "../models/game.models";

export const addPlayerToRoom = createAction<IPlayer>("preGame/AddPlayerToRoom");

export const playerReady = createAction<string>("preGame/PlayerReady");
