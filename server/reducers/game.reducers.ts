import { createReducer, createSlice } from "@reduxjs/toolkit";
import { GameMode, IGamePlayer, IPlayer } from "../models/game.models";
import { addPlayerToRoom, playerReady } from "../actions/preGame.actions";
import { startGame, targetCard } from "../actions/game.actions";
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
  builder
    .addCase(startGame, (state, { payload }) => {
      const turnSequence = shuffleCards(
        payload.players.map((player) => player.id)
      );
      const firstPlayer = turnSequence[0];

      const players = payload.players.reduce((accum, player, i) => {
        const deck = createStarterDeck();
        let cardsInHand: IGameCard[] = [];
        if (player.id === firstPlayer) {
          cardsInHand = deck.splice(0, 3);
        }

        const gamePlayer: IGamePlayer = {
          id: player.id,
          cardsInDeck: deck,
          cardsInDiscard: [],
          cardsInHand,
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
    })
    .addCase(targetCard, (state, { payload }) => {
      const player = state.players[payload.playerId];
      if (player) {
        return {
          ...state,
        };
      }

      return state;
    });
});

export default gameReducer;
