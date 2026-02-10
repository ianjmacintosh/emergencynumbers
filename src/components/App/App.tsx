import React from "react";
import { SERVICES } from "../../constants/emergency-services";
import { COUNTRY_NAMES, DEFAULT_COUNTRY } from "../../constants";

import CountryCard from "../CountryCard";

import styles from "./App.module.css";
import "./App.css";

function App() {
  const [countryId, setCountryId] =
    React.useState<keyof typeof SERVICES>(DEFAULT_COUNTRY);

  const services =
    SERVICES[countryId].sort((a, b) => {
      // Sort services:
      // Dispatch numbers come first
      // Numbers are sorted numerically
      const aIsDispatch = a.type === "Dispatch";
      const bIsDispatch = b.type === "Dispatch";
      if (aIsDispatch !== bIsDispatch) {
        return aIsDispatch ? -1 : 1;
      } else {
        return parseInt(a.phoneNumber) - parseInt(b.phoneNumber);
      }
    }) || [];

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
