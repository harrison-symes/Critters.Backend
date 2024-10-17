import { CardNames, IGameCard } from "../models/cards.models";
import { cardLookup } from "./cardLookup";
import { shuffleCards } from "./shuffleCards";

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
  return shuffleCards(starterDeckCards.map((cardName) => cardLookup[cardName]));
};
