import { createStore } from "./reducers/index.reducers";
import { Store } from "@reduxjs/toolkit";

type RoomStores = {
  [roomId: string]: Store;
};

const roomStores: RoomStores = {};

export const getRoomStore = (roomId: string) => {
  if (!roomStores[roomId]) {
    roomStores[roomId] = createStore();
  }

  return roomStores[roomId];
};

export const deleteRoomStore = (roomId: string) => {
  delete roomStores[roomId];
};
