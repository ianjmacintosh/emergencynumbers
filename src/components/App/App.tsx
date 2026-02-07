import React from "react";
import { SERVICES } from "../../constants/emergency-services";
import { COUNTRY_NAMES, DEFAULT_COUNTRY } from "../../constants";

import CountryCard from "../CountryCard";

import "./App.css";

function App() {
  const [countryId, setCountryId] =
    React.useState<keyof typeof COUNTRY_NAMES>(DEFAULT_COUNTRY);
  const name = COUNTRY_NAMES[countryId] || "Unknown";

  const services = SERVICES[countryId] || [];

  return (
    <div>
      <h1>Emergency Numbers</h1>
      <p>
        Here are the official published emergency phone numbers you can call if
        you are in a foreign country and need help.
      </p>
      <p>
        Calling a local emergency service is usually best, but calling anyone is
        better than calling no one.
      </p>

      <select
        value={countryId}
        onChange={(event) => {
          setCountryId(event.target.value as keyof typeof COUNTRY_NAMES);
        }}
      >
        {getCountryIds().map((countryId) => (
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
