import { RootState } from "../reducers/index.reducers";
import { IGameCard } from "./cards.models";

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  SetPlayerId: (id: string) => void;
  RoomJoined: (roomCode: string) => void;
  RoomCreated: (roomCode: string) => void;
  UpdateRoomState: (state: RootState) => void;
  // GameStarting: () => void;
}

export interface ClientToServerEvents {
  hello: () => void;
  SetName: (name: string) => void;
  CreateRoom: () => void;
  JoinRoom: (roomCode: string) => void;
  PlayerReady: (playerId: string) => void;
  StartGame: () => void;
  EndTurn: () => void;
  DrawCards: (cardCount: number) => void;
  PlayCard: (card: IGameCard) => void;
}

export interface InterServerEvents {
  ping: () => void;
  StartGame: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}
