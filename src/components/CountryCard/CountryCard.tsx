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
        {services
          .sort((service1, service2) => {
            if (service1.type === "Dispatch" || service2.type === "Dispatch") {
              return -1;
            }
            return (
              parseInt(service1.phoneNumber) - parseInt(service2.phoneNumber)
            );
          })
          .map((service: Service) => (
            <ServiceCard service={service} key={service.phoneNumber} />
          ))}
      </ul>
    </div>
  );
}

export default CountryCard;
