const Card = {
    Clubs: "clubs",
    Diamonds: "diamonds",
    Hearts: "hearts",
    Spades: "spades",
} as const;
   
// 以下は type Card = "clubs" | "diamonds" | "hearts" | "spades" と同じ
//type Card = typeof Card[keyof typeof Card];
   
const Color = {
    None: 0,
    Red: 1,
    Black: 2,
} as const;
   
// 以下は type Color = 0 | 1 | 2 と同じ
type Color = typeof Color[keyof typeof Color];

// type CardType = {
//     readonly Clubs: "clubs";
//     readonly Diamonds: "diamonds";
//     readonly Hearts: "hearts";
//     readonly Spades: "spades";
// }
type CardType = typeof Card;
 
// type CardKey = "Clubs" | "Diamonds" | "Hearts" | "Spades"
type CardKey = keyof CardType;
 
// type Card = "clubs" | "diamonds" | "hearts" | "spades"
type Card = CardType[CardKey];

const getCardColor = (card: Card): Color => {
    if ([Card.Diamonds, Card.Hearts].some((v) => v === card)) {
        return Color.Red;
    }
    if ([Card.Clubs, Card.Spades].some((v) => v === card)) {
        return Color.Black;
    }
    return Color.None;
};
const color = getCardColor(Card.Clubs); // Color.Black
console.log(color);
