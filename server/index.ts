import { error } from "console";
import { addPlayerToRoom, playerReady } from "./actions/preGame.actions";
import { getRoomStore } from "./gameRooms";
import { generateRoomCode } from "./helpers/room.helpers";
import { IGameRoom } from "./models/rooms.models";
import io from "./sockets";
import { startGame } from "./actions/game.actions";

// const app = express();
const userSockets: {
  [socketId: string]: {
    name: string;
    roomCode?: string;
  };
} = {};

const rooms: Record<string, IGameRoom> = {};

const getRoomCodeForSocketId = (socketId: string): string => {
  const roomCode = userSockets[socketId].roomCode;
  if (!roomCode) {
    throw error("No room code found");
  }
  return roomCode;
};

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.emit("SetPlayerId", socket.id);

  userSockets[socket.id] = {
    name: "Not Set",
  };

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    delete userSockets[socket.id];
  });

  socket.on("SetName", (name) => {
    console.log({ name });
    userSockets[socket.id].name = name;
  });

  socket.on("CreateRoom", () => {
    const roomCode = generateRoomCode();

    socket.rooms.add(roomCode);
    rooms[roomCode] = {
      roomCode,
      players: [
        {
          socketId: socket.id,
          name: userSockets[socket.id].name,
        },
      ],
    };
    console.log(socket.rooms, rooms);
    socket.emit("RoomCreated", roomCode);
    socket.join(roomCode);
    userSockets[socket.id].roomCode = roomCode;

    const store = getRoomStore(roomCode);
    const state = store.getState();

    console.log({ state });

    socket.emit("UpdateRoomState", state);

    store.subscribe(() => {
      socket.emit("UpdateRoomState", store.getState());
    });

    store.dispatch(
      addPlayerToRoom({
        id: socket.id,
        name: userSockets[socket.id].name,
        isReady: false,
        isAdmin: true,
      })
    );
  });

  socket.on("JoinRoom", (roomCode) => {
    if (rooms[roomCode]) {
      socket.emit("RoomJoined", roomCode);
      socket.join(roomCode);
      console.log(socket.rooms.entries);
      userSockets[socket.id].roomCode = roomCode;

      const store = getRoomStore(roomCode);
      const state = store.getState();

      socket.emit("UpdateRoomState", state);

      store.subscribe(() => {
        socket.emit("UpdateRoomState", store.getState());
      });

      store.dispatch(
        addPlayerToRoom({
          id: socket.id,
          name: userSockets[socket.id].name,
          isReady: false,
          isAdmin: false,
        })
      );
    } else {
      console.log("room code does not exist", roomCode);
    }
  });

  socket.on("PlayerReady", (playerId) => {
    const roomCode = getRoomCodeForSocketId(socket.id);

    console.log({ playerId, roomCode });

    const store = getRoomStore(roomCode);
    store.dispatch(playerReady(playerId));
  });

  socket.on("StartGame", () => {
    const roomCode = getRoomCodeForSocketId(socket.id);

    const store = getRoomStore(roomCode);
    const preGameSettings = store.getState().preGame;

    store.dispatch(startGame(preGameSettings));
  });
});

io.listen(4000, {});

// server.listen(4000, () => console.log("Server listening on port 4000"));
