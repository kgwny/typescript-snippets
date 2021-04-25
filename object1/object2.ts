const Card = {
    Clubs: "clubs",
    Diamonds: "diamonds",
    Hearts: "hearts",
    Spades: "spades",
} as const;
   
// 以下は type Card = "clubs" | "diamonds" | "hearts" | "spades" と同じ
type Card = typeof Card[keyof typeof Card];
console.log(Card);
// { Clubs: 'clubs',
//   Diamonds: 'diamonds',
//   Hearts: 'hearts',
//   Spades: 'spades' }
   
const Color = {
    None: 0,
    Red: 1,
    Black: 2,
} as const;
   
// 以下は type Color = 0 | 1 | 2 と同じ
type Color = typeof Color[keyof typeof Color];
console.log(Color);
// { None: 0, Red: 1, Black: 2 }
