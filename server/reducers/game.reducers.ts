import { createReducer, createSlice } from "@reduxjs/toolkit";
import { GameMode, IGamePlayer, IPlayer } from "../models/game.models";
import { addPlayerToRoom, playerReady } from "../actions/preGame.actions";
import { startGame } from "../actions/game.actions";
import { createStarterDeck } from "../cards/createStarterDeck";
import { shuffleCards } from "../cards/shuffleCards";
import { IGameCard } from "../models/cards.models";
import { createShopDeck } from "../cards/createShopDeck";

export interface IGameReducer {
  gameStarted: boolean;
  players: {
    [playerId: string]: IGamePlayer;
  };
  shop: {
    farmCardDeck: IGameCard[];
    farmCardsShop: IGameCard[];
  };
  currentPlayerTurn?: string;
  turnSequence: string[];
}

const initialState: IGameReducer = {
  gameStarted: false,
  players: {},
  currentPlayerTurn: undefined,
  turnSequence: [],
  shop: {
    farmCardDeck: [],
    farmCardsShop: [],
  },
};

const gameReducer = createReducer<IGameReducer>(initialState, (builder) => {
  builder.addCase(startGame, (state, { payload }) => {
    const turnSequence = shuffleCards(
      payload.players.map((player) => player.id)
    );
    const firstPlayer = turnSequence[0];

    const players = payload.players.reduce((accum, player, i) => {
      const gamePlayer: IGamePlayer = {
        id: player.id,
        cardsInDeck: createStarterDeck(),
        cardsInDiscard: [],
        cardsInHand: [],
        name: player.name,
        crops: {
          Apple: i,
          Berry: i,
          Carrot: i,
        },
      };
      accum[player.id] = gamePlayer;

      return accum;
    }, {} as Record<string, IGamePlayer>);

    console.log(players);
    const farmCardDeck = createShopDeck();
    const farmCardsShop = farmCardDeck.splice(0, 4);

    console.log({ farmCardDeck, farmCardsShop });

    return {
      ...state,
      gameStarted: true,
      players,
      turnSequence,
      currentPlayerTurn: firstPlayer,
      shop: {
        farmCardDeck,
        farmCardsShop,
      },
    };
  });
});

export default gameReducer;
