import {
  PoliceCarIcon,
  AmbulanceIcon,
  FireTruckIcon,
  HeadsetIcon,
} from "@phosphor-icons/react";
import type { Service } from "../../constants/emergency-services";

import styles from "./ServiceCard.module.css";

function ServiceCard({ service }: { service: Service }) {
  const { phoneNumber, type } = service;
  const Icon = {
    Dispatch: HeadsetIcon,
    Ambulance: AmbulanceIcon,
    "Fire Department": FireTruckIcon,
    Police: PoliceCarIcon,
  }[type];

  return (
    <li className={styles.service} key={phoneNumber}>
      <Icon size={32} weight="fill" className={styles.icon} />
      <span className={styles.type}>{type}</span>
      {/* {description && <p>{description}</p>} */}
      <a className={styles.phoneNumber} href={`tel:${phoneNumber}`}>
        Call {phoneNumber}
      </a>
    </li>
  );
}

export default ServiceCard;
