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

import type { IconProps } from "@phosphor-icons/react";
import type { Service, ServiceType } from "../../constants/emergency-services";

export type Card = {
  phoneNumber: string;
  name: string;
  type: ServiceType;
  description?: string;
  services: Service[];
};

import styles from "./ServiceCard.module.css";
import VisuallyHidden from "../VisuallyHidden";

function ServiceCard({ service }: { service: Card }) {
  const { phoneNumber, type, description, services } = service;

  return (
    <li className={styles.service}>
      <div className={styles.serviceInfoWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconWrapper}>
            <Icon type={type} size={32} weight="fill" className={styles.icon} />
          </div>
          <span className={styles.type}>{type}</span>
        </div>
        {description && (
          <p className={styles.descriptionWrapper}>{description}</p>
        )}
        {services.length > 1 && (
          <>
            Services offered:
            <ul>
              {services.map((currentService) => (
                <li className={styles.serviceListItem}>
                  <Icon type={currentService.type} weight="fill" size={32} />
                  {currentService.name}
                </li>
              ))}
            </ul>
          </>
        )}
        <div className={styles.phoneNumberWrapper}>
          <span>Call {phoneNumber}</span>

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

function Icon({ type, ...props }: { type: ServiceType } & IconProps) {
  const Element = {
    Dispatch: HeadsetIcon,
    Medical: AmbulanceIcon,
    Fire: FireTruckIcon,
    Police: PoliceCarIcon,
    Traffic: TrafficConeIcon,
    "Child Helpline": HandHeartIcon,
    Hazards: WarningIcon,
    Other: InfoIcon,
  }[type];

  return <Element {...props}></Element>;
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export default ServiceCard;
