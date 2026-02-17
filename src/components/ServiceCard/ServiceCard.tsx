import {
  PoliceCarIcon,
  AmbulanceIcon,
  FireTruckIcon,
  HeadsetIcon,
  TrafficConeIcon,
  HandHeartIcon,
  WarningIcon,
  InfoIcon,
  PhoneOutgoingIcon,
  CopyIcon,
} from "@phosphor-icons/react";
import type { Service } from "../../constants/emergency-services";

import styles from "./ServiceCard.module.css";
import VisuallyHidden from "../VisuallyHidden";

function ServiceCard({ service }: { service: Service }) {
  const { phoneNumber, type, description } = service;
  const Icon = {
    Dispatch: HeadsetIcon,
    Ambulance: AmbulanceIcon,
    "Fire Department": FireTruckIcon,
    Police: PoliceCarIcon,
    Traffic: TrafficConeIcon,
    "Child Helpline": HandHeartIcon,
    Hazards: WarningIcon,
    Other: InfoIcon,
  }[type];

  return (
    <li className={styles.service}>
      <div className={styles.serviceInfoWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconWrapper}>
            <Icon size={32} weight="fill" className={styles.icon} />
          </div>
          <span className={styles.type}>{type}</span>
        </div>

        {description && (
          <p className={styles.descriptionWrapper}>{description}</p>
        )}
        <div className={styles.phoneNumberWrapper}>
          <span>{phoneNumber}</span>

          <button
            className={styles.copyButton}
            onClick={() => {
              copyToClipboard(phoneNumber);
            }}
          >
            <CopyIcon
              size={24}
              weight="regular"
              className={`${styles.icon} ${styles.secondaryIcon}`}
            >
              <VisuallyHidden>Copy {phoneNumber} to Clipboard</VisuallyHidden>
            </CopyIcon>
          </button>
        </div>
      </div>
      <a
        className={`${styles.callButton} ${styles.iconWrapper}`}
        href={`tel:${phoneNumber}`}
      >
        <PhoneOutgoingIcon size={32} weight="fill" />
        <VisuallyHidden>Call {phoneNumber}</VisuallyHidden>
      </a>
    </li>
  );
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export default ServiceCard;
