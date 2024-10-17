import { IGameCard } from "./cards.models";

export interface IPlayer {
  name: string;
  id: string;
  isReady: boolean;
  isAdmin: boolean;
}

export enum CROP {
  Berry = "Berry",
  Carrot = "Carrot",
  Apple = "Apple",
}

export interface IGamePlayer {
  name: string;
  id: string;
  cardsInHand: IGameCard[];
  cardsInDeck: IGameCard[];
  cardsInDiscard: IGameCard[];
  crops: Record<CROP, number>;
}

export enum GameMode {
  Classic = "Classic",
  SupplyDemand = "Supply/Demand",
}
