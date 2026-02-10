import React from "react";
import { SERVICES } from "../../constants/emergency-services";
import { COUNTRY_NAMES, DEFAULT_COUNTRY } from "../../constants";

import CountryCard from "../CountryCard";

import styles from "./App.module.css";
import "./App.css";

function App() {
  const [countryId, setCountryId] =
    React.useState<keyof typeof SERVICES>(DEFAULT_COUNTRY);

  const services = SERVICES[countryId] || [];

  return (
    <div>
      <h1>Emergency Numbers</h1>

      <select
        className={styles.select}
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

      <CountryCard key={countryId} services={services} />
    </div>
  );
}

const getCountryIds = () =>
  Object.keys(COUNTRY_NAMES) as Array<keyof typeof COUNTRY_NAMES>;

export default App;
