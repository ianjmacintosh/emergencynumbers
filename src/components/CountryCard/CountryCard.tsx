import React from "react";
import { motion, type Transition } from "framer-motion";
import { COUNTRY_NAMES, type ValidCountryCode } from "../../constants";
import { SERVICES, type Service } from "../../constants/emergency-services";
import ServiceCard from "../ServiceCard";
import TextLink from "../TextLink";

import "./CountryCard.css";

const transition: Transition = { type: "spring", duration: 0.4, bounce: 0.2 };

function CountryCard({
  id,
  direction,
  isExiting = false,
  onExitComplete,
}: {
  id: ValidCountryCode;
  direction: number;
  isExiting?: boolean;
  onExitComplete?: () => void;
}) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const countryName = COUNTRY_NAMES[id];
  const hasServices = id in SERVICES;

  // When reduced motion is preferred, there's no animation to wait for,
  // so signal exit completion immediately on mount.
  React.useEffect(() => {
    if (isExiting && prefersReducedMotion) onExitComplete?.();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      initial={
        prefersReducedMotion
          ? undefined
          : { x: isExiting ? 0 : `${direction * 100}vw` }
      }
      animate={
        prefersReducedMotion
          ? undefined
          : { x: isExiting ? `${-direction * 100}vw` : 0 }
      }
      transition={transition}
      onAnimationComplete={
        isExiting && !prefersReducedMotion ? onExitComplete : undefined
      }
      className="content-wrapper"
      aria-hidden={isExiting}
      style={isExiting ? { position: "absolute" } : undefined}
    >
      {hasServices ? (
        getServiceCardData(SERVICES[id]!).map((serviceCard) => (
          <ServiceCard
            service={serviceCard}
            key={`${serviceCard.type}-${serviceCard.phoneNumber}`}
          />
        ))
      ) : (
        <article className="unknown-services">
          <h2>No Information Available</h2>
          <p>
            This directory does not have information about emergency services
            for {countryName}.
          </p>
          <p>Online resources that may have information about {countryName}:</p>
          <ul>
            <li>
              <TextLink
                href="https://www.gov.uk/foreign-travel-advice"
                target="_blank"
              >
                GOV.UK Foreign travel advice
              </TextLink>
            </li>
            <li>
              <TextLink
                href="https://travel.state.gov/en/international-travel.html"
                target="_blank"
              >
                US Department of State's Bureau of Consular Affairs
              </TextLink>
            </li>
          </ul>
          <p>
            Lastly, you could try Wikipedia's{" "}
            <TextLink
              href="https://en.wikipedia.org/wiki/List_of_emergency_telephone_numbers"
              target="_blank"
            >
              List of emergency telephone numbers
            </TextLink>{" "}
            article, but be aware it may include inaccurate information.
          </p>
        </article>
      )}
    </motion.div>
  );
}

function getServiceCardData(services: Service[]) {
  const cards: Service[] = [];

  for (const service of services) {
    const { type, phoneNumber, name, description, sources } = service;
    cards.push({ type, phoneNumber, name, description, sources });
  }

  cards.sort((a, b) => {
    const tier1 = ["Dispatch"];
    const tier2 = ["Fire", "Medical", "Police"];

    if (tier1.includes(a.type) && !tier1.includes(b.type)) return -1;
    if (tier1.includes(b.type) && !tier1.includes(a.type)) return 1;
    if (tier2.includes(a.type) && !tier2.includes(b.type)) return -1;
    if (tier2.includes(b.type) && !tier2.includes(a.type)) return 1;

    return Number(a.phoneNumber) - Number(b.phoneNumber);
  });

  return cards;
}

export default CountryCard;
