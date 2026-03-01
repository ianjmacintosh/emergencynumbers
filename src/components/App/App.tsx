import React from "react";
import { SERVICES } from "../../constants/emergency-services";
import { DEFAULT_COUNTRY } from "../../constants";
import { getCountryFromPath } from "../../utils/url";

import styles from "./App.module.css";
import CountrySelect from "../CountrySelect";
import CountryCard from "../CountryCard";
import Footer from "../Footer";

function App() {
  const [currentCountryId, setCurrentCountryId] = React.useState<
    keyof typeof SERVICES
  >(() => getCountryFromPath(window.location.pathname) ?? DEFAULT_COUNTRY);

  // Sync URL whenever currentCountryId changes
  React.useEffect(() => {
    const countryPage = `/${currentCountryId.toLowerCase()}/`;
    if (window.location.pathname !== countryPage) {
      history.pushState({}, "", countryPage);
    }
  }, [currentCountryId]);

  // Keep state in sync when the user navigates with browser back/forward.
  React.useEffect(() => {
    const handlePopState = () => {
      const countryFromPath = getCountryFromPath(window.location.pathname);
      if (countryFromPath) setCurrentCountryId(countryFromPath);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.contentWrapper} role="main">
        <header>
          <h1>Emergency Service Phone Numbers</h1>

          <CountrySelect
            value={currentCountryId}
            onChange={(value) =>
              setCurrentCountryId(value as keyof typeof SERVICES)
            }
          />
        </header>
        <CountryCard id={currentCountryId} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
