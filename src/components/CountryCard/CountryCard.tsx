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
      <ul className={styles.services}>
        {services.map((service: Service) => (
          <ServiceCard service={service} key={service.phoneNumber} />
        ))}
      </ul>
    </div>
  );
}

export default CountryCard;
