import { CardNames, IGameCard } from "../models/cards.models";
import { cardLookup } from "./cardLookup";
import { shuffleCards } from "./shuffleCards";
// import uuid from "uuid";

const uuid = require("uuid");

const shopDeckCards: CardNames[] = [
  //items
  CardNames.WateringCan,
  CardNames.WormFood,
  CardNames.MoleFood,
  CardNames.Dustpan,
  CardNames.PikNMix,
  CardNames.Contrabrand,
  CardNames.SmallBackpack,
  CardNames.RustyRake,
  CardNames.BirthdayPresent,
  CardNames.PotOfFeed,
  CardNames.PrizedCrop,
  CardNames.CompanionCrop,
  CardNames.Megaphone,
  CardNames.WeedWhacker,
  CardNames.FarmHand,
  CardNames.Placard,
  CardNames.Espresso,
  CardNames.BingoCard,
  CardNames.RottenCrops,
  CardNames.PackingSlip,
  CardNames.TrustyTrowel,
  CardNames.MorningCuppa,
  CardNames.DamagedGoods,
  CardNames.FarmingGloves,
  CardNames.Goldfish,
  CardNames.RecyclingBin,
];

export const createShopDeck = (): IGameCard[] => {
  return shuffleCards(
    shopDeckCards.map((cardName) => {
      const card = cardLookup[cardName];

      return {
        ...card,
        id: uuid.v4(),
      };
    })
  );
};
