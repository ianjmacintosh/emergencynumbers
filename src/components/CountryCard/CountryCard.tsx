import type { Service } from "../../constants/emergency-services";
import ServiceCard from "../ServiceCard";

import styles from "./CountryCard.module.css";

function CountryCard({ services }: { services: Service[] }) {
  return (
    <div className={styles.countryCard}>
      <ul className={styles.services}>
        {services.map((service: Service) => (
          <ServiceCard service={service} key={service.phoneNumber} />
        ))}
      </ul>
    </div>
  );
}

export default CountryCard;
