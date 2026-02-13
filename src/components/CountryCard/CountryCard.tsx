import { SERVICES, type Service } from "../../constants/emergency-services";
import ServiceCard from "../ServiceCard";

import styles from "./CountryCard.module.css";

function CountryCard({ id }: { id: keyof typeof SERVICES }) {
  const services =
    SERVICES[id].sort((a, b) => {
      // Sort services:
      // Dispatch numbers come first
      // Numbers are sorted numerically
      const aIsDispatch = a.type === "Dispatch";
      const bIsDispatch = b.type === "Dispatch";
      if (aIsDispatch !== bIsDispatch) {
        return aIsDispatch ? -1 : 1;
      } else {
        return parseInt(a.phoneNumber) - parseInt(b.phoneNumber);
      }
    }) || [];

  return (
    <div className={styles.countryCard}>
      <ul className={styles.services}>
        {services.map((service: Service) => (
          <ServiceCard
            service={service}
            key={`${service.type}-${service.phoneNumber}`}
          />
        ))}
      </ul>
    </div>
  );
}

export default CountryCard;
