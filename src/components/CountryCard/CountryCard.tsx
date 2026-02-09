import type { Service } from "../../constants/emergency-services";
import ServiceCard from "../ServiceCard";

import styles from "./CountryCard.module.css";

function CountryCard({
  name,
  services,
}: {
  name: string;
  services: Service[];
}) {
  return (
    <div className={styles.countryCard}>
      <h2>{name}</h2>
      <dl>
        {services.map((service: Service) => (
          <ServiceCard service={service} />
        ))}
      </dl>
    </div>
  );
}

export default CountryCard;
