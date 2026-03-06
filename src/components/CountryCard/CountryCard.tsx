import { COUNTRY_NAMES } from "../../constants";
import {
  SERVICES,
  type Service,
  type ServiceType,
} from "../../constants/emergency-services";
import ServiceCard from "../ServiceCard";
import TextLink from "../TextLink";

export type ServiceData = {
  phoneNumber: string;
  name: string;
  type: ServiceType;
  description?: string;
  services: Service[];
};

import styles from "./CountryCard.module.css";

function CountryCard({ id }: { id: keyof typeof COUNTRY_NAMES }) {
  const countryName = COUNTRY_NAMES[id];
  const hasServices = id in SERVICES;

  if (!hasServices) {
    return (
      <article className={styles.unknownServices}>
        <h3>No Information Available</h3>
        <p>
          This directory does not have information about emergency services for{" "}
          {countryName}.
        </p>
        <p>Online resources that may have information about {countryName}:</p>
        <ul>
          <li>
            <TextLink
              href="https://www.gov.uk/foreign-travel-advice"
              target="_blank"
            >
              GOV.UK Foreign travel advice
            </TextLink>
          </li>
          <li>
            <TextLink
              href="https://travel.state.gov/en/international-travel.html"
              target="_blank"
            >
              US Department of State's Bureau of Consular Affairs
            </TextLink>
          </li>
        </ul>
        <p>
          Lastly, you could try Wikipedia's{" "}
          <TextLink
            href="https://en.wikipedia.org/wiki/List_of_emergency_telephone_numbers"
            target="_blank"
          >
            List of emergency telephone numbers
          </TextLink>{" "}
          article, but be aware it may include inaccurate information.
        </p>
      </article>
    );
  }

  const serviceCards = getServiceCardData(
    SERVICES[id as keyof typeof SERVICES]!,
  );

  return (
    <ul className={styles.services}>
      {serviceCards.map((serviceCard) => (
        <ServiceCard
          service={serviceCard}
          key={`${serviceCard.type}-${serviceCard.phoneNumber}`}
        />
      ))}
    </ul>
  );
}

function getServiceCardData(services: Service[]) {
  const cards: ServiceData[] = [];

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

export default CountryCard;
