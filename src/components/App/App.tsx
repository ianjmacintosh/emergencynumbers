import React from "react";
import { SERVICES } from "../../constants/emergency-services";
import { DEFAULT_COUNTRY } from "../../constants";

import "./App.css";
import styles from "./App.module.css";
import CountrySelect from "../CountrySelect";
import CountryCard from "../CountryCard";

function App() {
  const [countryId, setCountryId] =
    React.useState<keyof typeof SERVICES>(DEFAULT_COUNTRY);

  return (
    <div className={styles.wrapper}>
      <h1>Emergency Numbers</h1>

      <CountrySelect
        value={countryId}
        onChange={(value) => setCountryId(value as keyof typeof SERVICES)}
      />

      <CountryCard id={countryId} />
    </div>
  );
}

export default App;
