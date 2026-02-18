import type { Service } from "../../constants/emergency-services";
import type { Card } from "../ServiceCard";

/*
Card:
{
    phoneNumber: "911",
    type: "Dispatch"
    services: []
}
*/

export function getServiceCardData(services: Service[]) {
  const cards: Card[] = [];
  // This function should return an array of card data
  // Each card must have exactly one phone number
  // Each card must have exactly one title
  // Each card must have exactly one type
  // Each card must include at least one service
  // Each card may have an extended description

  // First we build all the cards using service data
  for (const service of services) {
    const { type, phoneNumber, name, description } = service;
    // Find the card
    cards.push({
      type,
      phoneNumber,
      name,
      description,
    });
  }

  // Then we sort all the cards

  // Then we return the array of sorted cards
  return cards;
}
