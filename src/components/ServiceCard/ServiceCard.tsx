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
import type { ServiceType } from "../../constants/emergency-services";

import styles from "./ServiceCard.module.css";
import VisuallyHidden from "../VisuallyHidden";
import type { ServiceData } from "../CountryCard";
import React from "react";

function ServiceCard({ service }: { service: ServiceData }) {
  const { phoneNumber, type, description } = service;

  return (
    <li className={styles.service} aria-label="Emergency Service">
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
        <div className={styles.phoneNumberWrapper}>
          <span>Call {phoneNumber}</span>

          <CopyButton content={phoneNumber}></CopyButton>
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

function CopyButton({ content }: { content: string }) {
  const [showNotification, setShowNotification] = React.useState(false);
  return (
    <div className={styles.copyButtonWrapper}>
      <button
        className={styles.copyButton}
        onClick={() => {
          setShowNotification(true);

          setTimeout(() => {
            setShowNotification(false);
          }, 3000);
          copyToClipboard(content);
        }}
      >
        <CopyIcon
          weight="regular"
          className={styles.icon}
          height={24}
        ></CopyIcon>
        <VisuallyHidden>Copy {content} to Clipboard</VisuallyHidden>
      </button>
      <span
        role="status"
        aria-hidden={!showNotification}
        className={`${styles.notification} ${showNotification ? styles.visible : undefined}`.trim()}
      >
        Copied
      </span>
    </div>
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
