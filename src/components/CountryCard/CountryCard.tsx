import React from "react";
import type { Service } from "../../constants/emergency-services";

function CountryCard({
  name,
  services,
}: {
  name: string;
  services: Service[];
}) {
  return (
    <div>
      <h2>{name}</h2>
      <dl>
        {services.map((service: Service) => {
          const { name: serviceName, phoneNumber } = service;

          return (
            <React.Fragment key={phoneNumber}>
              <dt>
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>{" "}
              </dt>
              <dd>
                {serviceName} (<a href={`tel:${phoneNumber}`}>Call</a>)
              </dd>
            </React.Fragment>
          );
        })}
      </dl>
    </div>
  );
}

export default CountryCard;
