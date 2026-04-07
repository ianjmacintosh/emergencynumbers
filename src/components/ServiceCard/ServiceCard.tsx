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
import type { Service, ServiceType } from "../../constants/emergency-services";

import "./ServiceCard.css";
import LinkButton from "../LinkButton";

function ServiceCard({ service }: { service: Service }) {
  const { phoneNumber, type, description } = service;

  return (
    <article className="service" aria-label={`${type} service: ${phoneNumber}`}>
      <header>
        <Icon type={type} size={32} weight="fill" aria-hidden={true} />
        <h2 className="updog">{type}</h2>
        {phoneNumber && <h3 className="phone-number updog">{phoneNumber}</h3>}
      </header>
      {description && (
        <dl>
          <dt>
            <h4>Additional Information</h4>
          </dt>
          <dd>{description}</dd>
        </dl>
      )}
      {phoneNumber && (
        <ul className="actions">
          <li>
            <LinkButton
              className="icon-button call-button"
              href={`tel:${phoneNumber}`}
            >
              <PhoneOutgoingIcon size={24} weight="fill" />{" "}
              <span className="updog">
                Call <span className="phone-number">{phoneNumber}</span>
              </span>
            </LinkButton>
          </li>
        </ul>
      )}
    </article>
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

export default ServiceCard;
