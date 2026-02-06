import React from "react";

import "./App.css";

type CountryInfo = { name: string; services: Service[] };
type Service = {
  type: string;
  name: string;
  description?: string;
  phoneNumber: string;
};

const COUNTRIES: CountryInfo[] = [
  {
    name: "Brazil",
    services: [
      {
        type: "Ambulance",
        name: "Emergency services",
        description: "SAMU ambulance service",
        phoneNumber: "192",
      },
      /*
      TODO: Add these services:
        190 - Policia (Police)
        191 - Policia Rodoviaria (Police on interstate roads)
        192 - Ambulancia (Ambulance)
        193 - Bombeiros (Fire Department)
      */
    ],
  },
  {
    name: "United States",
    services: [
      {
        type: "Switchboard",
        name: "Emergency services",
        description: "Switchboard for various services",
        phoneNumber: "911",
      },
    ],
  },
];

function App() {
  return (
    <div>
      <h1>Emergency Numbers</h1>

      {COUNTRIES.map((country) => (
        <CountryCard {...country} />
      ))}
    </div>
  );
}

function CountryCard({ name, services }: CountryInfo) {
  return (
    <div>
      <h2>{name}</h2>
      {services.map((service: Service) => {
        const { name, phoneNumber } = service;

        return (
          <dl>
            <dt>{name}</dt>
            <dd>
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a> (
              <a href={`tel:${phoneNumber}`}>Call</a>)
            </dd>
          </dl>
        );
      })}
    </div>
  );
}

export default App;
