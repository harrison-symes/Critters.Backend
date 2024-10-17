import { CardNames, CardType, TCardLookup } from "../models/cards.models";

export const cardLookup: TCardLookup = {
  [CardNames.AppleTree]: {
    cost: {
      Apple: 2,
      Carrot: 0,
      Berry: 0,
    },
    name: CardNames.AppleTree,
    type: CardType.Item,
    image: "/images/carrot_grower.png",
    description: "Gain 1 Apple.",
  },
  [CardNames.CarrotPatch]: {
    cost: {
      Apple: 0,
      Carrot: 2,
      Berry: 0,
    },
    name: CardNames.CarrotPatch,
    type: CardType.Item,
    image: "/images/carrot_grower.png",
    description: "Gain 1 Carrot.",
  },
  [CardNames.BerryBush]: {
    cost: {
      Apple: 0,
      Carrot: 0,
      Berry: 2,
    },
    name: CardNames.BerryBush,
    type: CardType.Item,
    image: "/images/carrot_grower.png",
    description: "Gain 1 Berry.",
  },
  [CardNames.FriendshipCharm]: {
    cost: {
      Apple: 1,
      Carrot: 1,
      Berry: 1,
    },
    name: CardNames.FriendshipCharm,
    type: CardType.Item,
    image: "/images/carrot_grower.png",
    description: "Get a favour from the shop for free.",
  },
  [CardNames.PickOfTheCrop]: {
    cost: {
      Apple: 1,
      Carrot: 1,
      Berry: 1,
    },
    name: CardNames.PickOfTheCrop,
    type: CardType.Item,
    image: "/images/carrot_grower.png",
    description: "Gain 2 random crops.",
  },

  //items
  [CardNames.Dustpan]: {
    cost: {
      Apple: 0,
      Carrot: 1,
      Berry: 3,
    },
    name: CardNames.Dustpan,
    type: CardType.Item,
    image: "/images/dustpan.png",
    description: "Draw a card. You may refund it this turn.",
  },
  [CardNames.WormFood]: {
    cost: {
      Apple: 1,
      Carrot: 3,
      Berry: 1,
    },
    name: CardNames.WormFood,
    type: CardType.Item,
    image: "/images/worm_food.png",
    description: "Gain 2 Carrots, 1 Apple and 1 Berry.",
  },
  [CardNames.MoleFood]: {
    cost: {
      Apple: 3,
      Carrot: 1,
      Berry: 1,
    },
    name: CardNames.MoleFood,
    type: CardType.Item,
    image: "/images/mole_food.png",
    description: "Gain 2 Apples, 1 Carrot and 1 Berry.",
  },
  [CardNames.WateringCan]: {
    cost: {
      Apple: 0,
      Carrot: 2,
      Berry: 2,
    },
    name: CardNames.WateringCan,
    type: CardType.Item,
    image: "/images/watering_can.png",
    description: "Put a card from your discard pile on top of your deck.",
  },
  [CardNames.PikNMix]: {
    cost: {
      Apple: 1,
      Carrot: 1,
      Berry: 1,
    },
    name: CardNames.PikNMix,
    type: CardType.Item,
    image: "/images/pik_n_mix.png",
    description: "Gain 3 random crops.",
  },
  [CardNames.Contrabrand]: {
    cost: {
      Apple: 2,
      Carrot: 2,
      Berry: 0,
    },
    name: CardNames.Contrabrand,
    type: CardType.Item,
    image: "/images/contrabrand.png",
    description: "Gift a card from your discard pile to your Rival.",
  },
  [CardNames.SmallBackpack]: {
    cost: {
      Apple: 2,
      Carrot: 2,
      Berry: 0,
    },
    name: CardNames.SmallBackpack,
    type: CardType.Item,
    image: "/images/small_backpack.png",
    description: "Draw 2 cards, then discard a card.",
  },
  [CardNames.RustyRake]: {
    cost: {
      Apple: 0,
      Carrot: 3,
      Berry: 2,
    },
    name: CardNames.RustyRake,
    type: CardType.Item,
    image: "/images/rusty_rake.png",
    description: "Shuffle your discard pile into your deck. Draw 2 cards.",
  },
  [CardNames.BirthdayPresent]: {
    cost: {
      Apple: 0,
      Carrot: 1,
      Berry: 0,
    },
    name: CardNames.BirthdayPresent,
    type: CardType.Item,
    image: "/images/birthday_present.png",
    description: "Gain 3 random crops, then Gift this to your Rival.",
  },
  [CardNames.PotOfFeed]: {
    cost: {
      Apple: 2,
      Carrot: 2,
      Berry: 2,
    },
    name: CardNames.PotOfFeed,
    type: CardType.Item,
    image: "/images/pot_of_feed.png",
    description: "Draw 2 cards.",
  },
  [CardNames.PrizedCrop]: {
    cost: {
      Apple: 2,
      Carrot: 2,
      Berry: 2,
    },
    name: CardNames.PrizedCrop,
    type: CardType.Item,
    image: "/images/prized_crop.png",
    description: "Gain +6 of a random crop.",
  },
  [CardNames.CompanionCrop]: {
    cost: {
      Apple: 2,
      Carrot: 0,
      Berry: 1,
    },
    name: CardNames.CompanionCrop,
    type: CardType.Item,
    image: "/images/companion_crop.png",
    description: "Place this under one of your seeds. It's harvest is doubled.",
  },
  [CardNames.Megaphone]: {
    cost: {
      Apple: 3,
      Carrot: 1,
      Berry: 0,
    },
    name: CardNames.Megaphone,
    type: CardType.Item,
    image: "/images/megaphone.png",
    description:
      "Remove 1 Zzz counter from each of your Critters. Add 1 Zzz counter to each of your Rival's Critters.",
  },
  [CardNames.WeedWhacker]: {
    cost: {
      Apple: 3,
      Carrot: 2,
      Berry: 0,
    },
    name: CardNames.WeedWhacker,
    type: CardType.Item,
    image: "/images/weed_whacker.png",
    description: "Discard the top 2 cards of your deck. Draw 2 cards.",
  },
  [CardNames.FarmHand]: {
    cost: {
      Apple: 3,
      Carrot: 0,
      Berry: 1,
    },
    name: CardNames.FarmHand,
    type: CardType.Item,
    image: "/images/farm_hand.png",
    description:
      "Place this under one of your Critters. Whenever they use their Talent, draw a card.",
  },
  [CardNames.Placard]: {
    cost: {
      Apple: 0,
      Carrot: 1,
      Berry: 2,
    },
    name: CardNames.Placard,
    type: CardType.Item,
    image: "/images/placard.png",
    description: "Refresh an entire row in the shop. Draw a card.",
  },
  [CardNames.Espresso]: {
    cost: {
      Apple: 1,
      Carrot: 0,
      Berry: 2,
    },
    name: CardNames.Espresso,
    type: CardType.Item,
    image: "/images/espresso.png",
    description:
      "Place this under one of your critters. When they are exhausted, place them on top of your deck.",
  },
  [CardNames.BingoCard]: {
    cost: {
      Apple: 2,
      Carrot: 2,
      Berry: 2,
    },
    name: CardNames.BingoCard,
    type: CardType.Item,
    image: "/images/bingo_card.png",
    description:
      "Get a random crop. If it is a... Carrot: Gain 1 of each crop. Apple: Draw a card. Berry: Return this to your hand.",
  },
  [CardNames.RottenCrops]: {
    cost: {
      Apple: 1,
      Carrot: 1,
      Berry: 1,
    },
    name: CardNames.RottenCrops,
    type: CardType.Item,
    image: "/images/rotten_crops.png",
    description: "Gift. Destroy 2 crops to draw a card.",
  },
  [CardNames.PackingSlip]: {
    cost: {
      Apple: 4,
      Carrot: 4,
      Berry: 4,
    },
    name: CardNames.PackingSlip,
    type: CardType.Item,
    image: "/images/packing_slip.png",
    description: "If you have 3 Work Orders, pack a free crate into each one.",
  },
  [CardNames.TrustyTrowel]: {
    cost: {
      Apple: 2,
      Carrot: 2,
      Berry: 0,
    },
    name: CardNames.TrustyTrowel,
    type: CardType.Item,
    image: "/images/trusty_trowel.png",
    description: "Gain +3 of a random crop.",
  },
  [CardNames.MorningCuppa]: {
    cost: {
      Apple: 1,
      Carrot: 0,
      Berry: 3,
    },
    name: CardNames.MorningCuppa,
    type: CardType.Item,
    image: "/images/morning_cuppa.png",
    description:
      "Remove all Zzz counters from one of your Critters. Draw a card.",
  },
  [CardNames.DamagedGoods]: {
    cost: {
      Apple: 1,
      Carrot: 0,
      Berry: 3,
    },
    name: CardNames.DamagedGoods,
    type: CardType.Item,
    image: "/images/damaged_goods.png",
    description: "Refund a card from your hand or discard pile.",
  },
  [CardNames.FarmingGloves]: {
    cost: {
      Apple: 2,
      Carrot: 2,
      Berry: 0,
    },
    name: CardNames.FarmingGloves,
    type: CardType.Item,
    image: "/images/farming_gloves.png",
    description:
      "Draw a card. If it is a seeds card, harvest it instantly. Otherwise, put this back on top of your deck.",
  },
  [CardNames.Goldfish]: {
    cost: {
      Apple: 0,
      Carrot: 0,
      Berry: 1,
    },
    name: CardNames.Goldfish,
    type: CardType.Item,
    image: "/images/goldfish.png",
    description: "Gift. This does nothing.",
  },
  [CardNames.RecyclingBin]: {
    cost: {
      Apple: 0,
      Carrot: 3,
      Berry: 1,
    },
    name: CardNames.RecyclingBin,
    type: CardType.Item,
    image: "/images/recycling_bin.png",
    description:
      "Shuffle a card from your discard pile into your deck. Draw a card.",
  },
};
