import type { Service } from "../../constants/emergency-services";

import styles from "./ServiceCard.module.css";

function ServiceCard({ service }: { service: Service }) {
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
}

export default ServiceCard;
