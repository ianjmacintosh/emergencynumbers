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

  // First we build all the cards using service data
  for (const service of services) {
    const { type, phoneNumber, name, description } = service;

    // Find the card
    const currentCard = cards.find(
      ({ phoneNumber: currentPhoneNumber }) =>
        phoneNumber === currentPhoneNumber,
    );
    if (currentCard) {
      currentCard.type = "General";
      currentCard.services.push(service);
    } else {
      cards.push({
        type,
        phoneNumber,
        name,
        description,
        services: [service],
      });
    }
  }

  // Then we sort all the cards
  cards.sort((a, b) => {
    const tier1 = ["General", "Dispatch"];
    const tier2 = ["Fire Department", "Ambulance", "Police"];

    // A comes first if it's in a higher tier than B
    if (
      (tier1.includes(a.type) && !tier1.includes(b.type)) ||
      (tier2.includes(a.type) && !tier2.includes(b.type))
    ) {
      return -1;
    }
    // B comes first if it's in a higher tier than A
    if (
      (tier1.includes(b.type) && !tier1.includes(a.type)) ||
      (tier2.includes(b.type) && !tier2.includes(a.type))
    ) {
      return 1;
    }

    // Same tier: sort by phone number ascending
    return Number(a.phoneNumber) - Number(b.phoneNumber);
  });

  // Then we return the array of sorted cards
  return cards;
}
