const redCards = ["diamonds", "hearts"] as const;
const blackCards = ["clubs", "spades"] as const;
type Card = typeof redCards[number] | typeof blackCards[number];
 
const colors = ["none", "red", "black"] as const;
type Color = typeof colors[number];
 
const getCardColor = (card: Card): Color => {
  if (redCards.some((v) => v === card)) {
    return "red";
  }
  if (blackCards.some((v) => v === card)) {
    return "black";
  }
  return "none";
};

const color = getCardColor("clubs"); // black
console.log(color);
