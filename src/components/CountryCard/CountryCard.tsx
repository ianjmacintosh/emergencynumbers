import type { Service } from "../../constants/emergency-services";

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
        {services.map((service: Service) => {
          const { name: serviceName, phoneNumber, description, type } = service;

          return (
            <div className={styles.serviceCard} key={phoneNumber}>
              <h3>
                {type} (<em>{serviceName}</em>){" "}
              </h3>
              {description && <p>{description}</p>}
              <p>
                <a href={`tel:${phoneNumber}`}>Call {phoneNumber}</a>
              </p>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

export default CountryCard;
