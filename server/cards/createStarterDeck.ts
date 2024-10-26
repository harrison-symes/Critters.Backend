import { CardNames, IGameCard } from "../models/cards.models";
import { cardLookup } from "./cardLookup";
import { shuffleCards } from "./shuffleCards";

const uuid = require("uuid");

const starterDeckCards: CardNames[] = [
  CardNames.AppleTree,
  CardNames.AppleTree,
  CardNames.AppleTree,
  CardNames.BerryBush,
  CardNames.BerryBush,
  CardNames.BerryBush,
  CardNames.CarrotPatch,
  CardNames.CarrotPatch,
  CardNames.CarrotPatch,
  CardNames.FriendshipCharm,
  CardNames.FriendshipCharm,
  CardNames.PickOfTheCrop,
];

export const createStarterDeck = (): IGameCard[] => {
  return shuffleCards(
    starterDeckCards.map((cardName) => {
      const card = cardLookup[cardName];

      return {
        ...card,
        id: uuid.v4(),
      };
    })
  );
};
