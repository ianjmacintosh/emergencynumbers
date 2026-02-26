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
  CheckIcon,
} from "@phosphor-icons/react";

import type { IconProps } from "@phosphor-icons/react";
import type { ServiceType } from "../../constants/emergency-services";

import styles from "./ServiceCard.module.css";
import VisuallyHidden from "../VisuallyHidden";
import type { ServiceData } from "../CountryCard";
import React from "react";

function ServiceCard({ service }: { service: ServiceData }) {
  const { phoneNumber, type, description } = service;
  const newMarkup = (
    <article className={styles.service} aria-label="Emergency Service">
      <h2>
        <Icon type={type} size={32} weight="fill" className={styles.icon} />
        {type}
      </h2>
      <dl>
        <dt>Phone Number</dt>
        <dd>{phoneNumber}</dd>
        {description && (
          <>
            <dt>Additional Information</dt>
            <dd>{description}</dd>
          </>
        )}
      </dl>
      <ul className={styles.actions}>
        <li>
          <button>
            <PhoneOutgoingIcon size={24} weight="fill" /> Call {phoneNumber}
          </button>
        </li>
        <li>
          <CopyButton content={phoneNumber}>
            Copy {phoneNumber} to clipboard
          </CopyButton>
        </li>
      </ul>
    </article>
  );

  return newMarkup;
}

function CopyButton({
  content,
  children,
}: {
  content: string;
  children: React.ReactElement;
}) {
  const [showNotification, setShowNotification] = React.useState(false);
  return (
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
      {showNotification ? (
        <>
          <CheckIcon size={24} />
          Copied "{content}"
        </>
      ) : (
        <>
          <CopyIcon size={24} weight="fill" />
          {children}
        </>
      )}
    </button>
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
