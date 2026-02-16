import { SERVICES, type Service } from "../../constants/emergency-services";
import ServiceCard from "../ServiceCard";

import styles from "./CountryCard.module.css";

function CountryCard({ id }: { id: keyof typeof SERVICES }) {
  const typePriority: Record<Service["type"], number> = {
    Dispatch: 0,
    Police: 1,
    Ambulance: 2,
    "Fire Department": 3,
    Traffic: 4,
    "Child Helpline": 5,
    Hazards: 6,
    Other: 7,
  };

  const services =
    SERVICES[id].sort((a, b) => {
      const priorityDiff = typePriority[a.type] - typePriority[b.type];
      if (priorityDiff !== 0) return priorityDiff;
      return parseInt(a.phoneNumber) - parseInt(b.phoneNumber);
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
