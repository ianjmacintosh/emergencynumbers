import type { Service } from "../../constants/emergency-services";
import type { Card } from "../ServiceCard";

export function getServiceCardData(services: Service[]) {
  const cards: Card[] = [];

  // First we build all the cards using service data
  for (const service of services) {
    const { type, phoneNumber, name, description } = service;

    cards.push({
      type,
      phoneNumber,
      name,
      description,
      services: [service],
    });
  }

  // Then we sort all the cards
  cards.sort((a, b) => {
    const tier1 = ["Dispatch"];
    const tier2 = ["Fire", "Medical", "Police"];

    // Tier 1 always comes first
    if (tier1.includes(a.type) && !tier1.includes(b.type)) {
      return -1;
    }
    if (tier1.includes(b.type) && !tier1.includes(a.type)) {
      return 1;
    }

    // Then tier 2 comes before anything else
    if (tier2.includes(a.type) && !tier2.includes(b.type)) {
      return -1;
    }
    if (tier2.includes(b.type) && !tier2.includes(a.type)) {
      return 1;
    }

    // Same tier: sort by phone number ascending
    return Number(a.phoneNumber) - Number(b.phoneNumber);
  });

  // Then we return the array of sorted cards
  return cards;
}
