export interface IGameRoom {
  roomCode: string;
  players: {
    socketId: string;
    name: string;
  }[];
}
