import { SERVICES } from "../../constants/emergency-services";
import ServiceCard from "../ServiceCard";
import { getServiceCardData } from "./helpers";

import styles from "./CountryCard.module.css";

function CountryCard({ id }: { id: keyof typeof SERVICES }) {
  const serviceCards = getServiceCardData(SERVICES[id]);

  return (
    <div className={styles.countryCard}>
      <ul className={styles.services}>
        {serviceCards.map((serviceCard) => (
          <ServiceCard
            service={serviceCard}
            key={`${serviceCard.type}-${serviceCard.phoneNumber}`}
          />
        ))}
      </ul>
    </div>
  );
}

export default CountryCard;
