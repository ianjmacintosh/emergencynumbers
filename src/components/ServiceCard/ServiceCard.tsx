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
} from "@phosphor-icons/react";

import type { IconProps } from "@phosphor-icons/react";
import type { ServiceType } from "../../constants/emergency-services";
import type { ServiceData } from "../CountryCard";

import "./ServiceCard.css";
import LinkButton from "../LinkButton";

function ServiceCard({ service }: { service: ServiceData }) {
  const { phoneNumber, type, description } = service;
  const newMarkup = (
    <article className="service" aria-label="Emergency Service">
      <h2>
        <Icon type={type} size={32} weight="fill" />
        {type}
        <span className="phone-number" aria-label="Phone Number">
          {phoneNumber}
        </span>
      </h2>
      {description && (
        <dl>
          <dt>Additional Information</dt>
          <dd>{description}</dd>
        </dl>
      )}
      <ul className="actions">
        <li>
          <LinkButton
            className="action-button call-button"
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

export default ServiceCard;
