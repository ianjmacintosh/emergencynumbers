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
import type { ServiceData } from "../CountryCard";

import styles from "./ServiceCard.module.css";
import React from "react";
import LinkButton from "../LinkButton";

function ServiceCard({ service }: { service: ServiceData }) {
  const { phoneNumber, type, description } = service;
  const newMarkup = (
    <article className={styles.service} aria-label="Emergency Service">
      <h2>
        <Icon type={type} size={32} weight="fill" className={styles.icon} />
        {type}
        <span className={styles.phoneNumber} aria-label="Phone Number">
          {phoneNumber}
        </span>
      </h2>
      {description && (
        <dl>
          <dt>Additional Information</dt>
          <dd>{description}</dd>
        </dl>
      )}
      <ul className={styles.actions}>
        {/* <li hidden={true}>
          <CopyButton
            className={`${styles.iconButton}`.trim()}
            content={phoneNumber}
          >
            Copy {phoneNumber} to clipboard
          </CopyButton>
        </li> */}
        <li>
          <LinkButton
            className={`${styles.iconButton} ${styles.callButton}`.trim()}
            href={`tel:${phoneNumber}`}
          >
            <PhoneOutgoingIcon size={24} weight="fill" /> Call {phoneNumber}
          </LinkButton>
        </li>
      </ul>
    </article>
  );

  return newMarkup;
}

function CopyButton({
  content,
  children,
  ...delegated
}: {
  content: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">) {
  const [showNotification, setShowNotification] = React.useState(false);
  return (
    <LinkButton
      className={styles.iconButton}
      onClick={() => {
        setShowNotification(true);

        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
        copyToClipboard(content);
      }}
      role={showNotification ? "status" : undefined}
      disabled={showNotification}
      {...delegated}
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
    </LinkButton>
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
