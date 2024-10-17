import { CROP } from "./game.models";

export enum CardType {
  Item = "Item",
  Critter = "Critter",
  Seeds = "Seeds",
}

export interface CardCost {
  [CROP.Apple]: number;
  [CROP.Carrot]: number;
  [CROP.Berry]: number;
  any?: number;
}

export interface IGameCardBase {
  name: CardNames;
  cost: CardCost;
  type: CardType;
  image: string;
}

export interface IGameCardItem extends IGameCardBase {
  type: CardType.Item;
  description: string;
}

export interface IGameCardCritter extends IGameCardBase {
  type: CardType.Critter;
}
export interface IGameCardSeeds extends IGameCardBase {
  type: CardType.Seeds;
}

export type IGameCard = IGameCardItem | IGameCardCritter | IGameCardSeeds;

export enum CardNames {
  //starter
  AppleTree = "Apple Tree",
  BerryBush = "Berry Bush",
  CarrotPatch = "Carrot Patch",
  FriendshipCharm = "Friendship Charm",
  PickOfTheCrop = "Pick of the Crop",

  //items
  WateringCan = "Watering Can",
  WormFood = "Worm Food",
  MoleFood = "Mole Food",
  Dustpan = "Dustpan",
  PikNMix = "Pik'n'mix",
  Contrabrand = "Contrabrand",
  SmallBackpack = "Small Backpack",
  RustyRake = "Rusty Rake",
  BirthdayPresent = "Birthday Present",
  PotOfFeed = "Pot of Feed",
  PrizedCrop = "Prized Crop",
  CompanionCrop = "Companion Crop",
  Megaphone = "Megaphone",
  WeedWhacker = "Weed Whacker",
  FarmHand = "Farm Hand",
  Placard = "Placard",
  Espresso = "Espresso",
  BingoCard = "Bingo Card",
  RottenCrops = "Rotten Crops",
  PackingSlip = "Packing Slip",
  TrustyTrowel = "TrustyTrowel",
  MorningCuppa = "Morning Cuppa'",
  DamagedGoods = "Damaged Goods",
  FarmingGloves = "Farming Gloves",
  Goldfish = "Goldfish",
  RecyclingBin = "Recycling Bin",
}

export type TCardLookup = Record<CardNames, IGameCard>;
