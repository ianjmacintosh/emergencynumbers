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

import type { Service, ServiceType } from "../../constants/emergency-services";

export type CardType = "General" | ServiceType;

export type Card = {
  phoneNumber: string;
  name: string;
  type: CardType;
  description?: string;
  services: Service[];
};

import styles from "./ServiceCard.module.css";
import VisuallyHidden from "../VisuallyHidden";

function ServiceCard({ service }: { service: Card }) {
  const { phoneNumber, type, description, services } = service;
  const Icon = {
    General: HeadsetIcon,
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
          {type === "General" ? (
            <>
              <span className={styles.type}>{phoneNumber}</span>

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
                  <VisuallyHidden>
                    Copy {phoneNumber} to Clipboard
                  </VisuallyHidden>
                </CopyIcon>
              </button>
            </>
          ) : (
            <span className={styles.type}>{type}</span>
          )}
        </div>
        {description && (
          <p className={styles.descriptionWrapper}>{description}</p>
        )}
        {services.length > 1 && (
          <>
            Services offered:
            <ul>
              {services.map((currentService) => (
                <li>{currentService.name}</li>
              ))}
            </ul>
          </>
        )}
        {type === "General" ? undefined : (
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
        )}
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
