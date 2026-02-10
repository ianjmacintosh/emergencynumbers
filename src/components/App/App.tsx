import React from "react";
import { SERVICES } from "../../constants/emergency-services";
import { COUNTRY_NAMES, DEFAULT_COUNTRY } from "../../constants";

import CountryCard from "../CountryCard";

import "./App.css";

function App() {
  const [countryId, setCountryId] =
    React.useState<keyof typeof SERVICES>(DEFAULT_COUNTRY);
  const name = COUNTRY_NAMES[countryId] || "Unknown";

  const services = SERVICES[countryId] || [];

  return (
    <div>
      <h1>Emergency Numbers</h1>

      <select
        value={countryId}
        onChange={(event) => {
          setCountryId(event.target.value as keyof typeof SERVICES);
        }}
      >
        {getCountryIds()
          .filter((country) => country in SERVICES)
          .map((countryId) => (
            <option key={countryId} value={countryId}>
              {COUNTRY_NAMES[countryId] || "Unknown"}
            </option>
          ))}
      </select>

      <CountryCard key={countryId} name={name} services={services} />
    </div>
  );
}

const getCountryIds = () =>
  Object.keys(COUNTRY_NAMES) as Array<keyof typeof COUNTRY_NAMES>;

export default App;
