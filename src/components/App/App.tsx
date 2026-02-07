import React from "react";
import { SERVICES } from "../../constants/emergency-services";
import { SUPPORTED_COUNTRIES } from "../../constants/supported-countries";

import CountryCard from "../CountryCard";

import "./App.css";

const defaultCountry = "US";

function App() {
  const [countryId, setCountryId] = React.useState("US");

  const name =
    SUPPORTED_COUNTRIES.find((country) => country.id === countryId)?.name ||
    defaultCountry;

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
      <p>Don't panic, be a hero.</p>

      <select
        onChange={(event) => {
          setCountryId(event.target.value);
        }}
      >
        {SUPPORTED_COUNTRIES.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>

      <CountryCard key={countryId} name={name} services={services} />
    </div>
  );
}

export default App;
