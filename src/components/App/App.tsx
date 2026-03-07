import React from "react";
import { SERVICES } from "../../constants/emergency-services";
import { COUNTRY_NAMES, DEFAULT_COUNTRY } from "../../constants";
import { getCountryFromPath } from "../../utils/url";

import "./App.css";
import CountrySelect from "../CountrySelect";
import CountryCard from "../CountryCard";
import Footer from "../Footer";
import LinkButton from "../LinkButton";
import * as FlagIcon from "country-flag-icons/react/3x2";
import { hasFlag } from "country-flag-icons";
import { XIcon } from "@phosphor-icons/react";

function App({ initialCountry }: { initialCountry?: string }) {
  const [currentCountryId, setCurrentCountryId] = React.useState<
    keyof typeof COUNTRY_NAMES
  >(
    () =>
      (initialCountry as keyof typeof COUNTRY_NAMES) ??
      getCountryFromPath(window.location.pathname) ??
      DEFAULT_COUNTRY,
  );

  const [suppressBanner, setSuppressBanner] = React.useState(false);
  const [userLocation, setUserLocation] = React.useState<
    keyof typeof SERVICES | null
  >(null);

  React.useEffect(() => {
    fetch("/api/geo")
      .then((res) => res.json())
      .then((data: { country: string | null }) => {
        if (data.country && data.country in SERVICES) {
          setUserLocation(data.country as keyof typeof SERVICES);
        }
      })
      .catch(() => {});
  }, []);

  // Sync URL whenever currentCountryId changes
  React.useEffect(() => {
    const countryPage = `/${currentCountryId.toLowerCase()}/`;
    if (window.location.pathname !== countryPage) {
      history.pushState({}, "", countryPage);
      window.dispatchEvent(new Event("locationchange"));
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

  const Flag =
    userLocation && hasFlag(userLocation)
      ? FlagIcon[userLocation as keyof typeof FlagIcon]
      : null;

  return (
    <div className="page-wrapper">
      {userLocation &&
        userLocation in SERVICES &&
        userLocation !== currentCountryId &&
        suppressBanner === false && (
          <Banner>
            <ul className="location-swap-menu">
              <li className="confirm">
                <LinkButton
                  onClick={() => {
                    setSuppressBanner(true);
                    setCurrentCountryId(userLocation);
                  }}
                  hasIcon={true}
                  className="confirm-button"
                >
                  {Flag && <Flag height={24} />}
                  {/* <SwapIcon size={24} /> */}
                  Switch to {COUNTRY_NAMES[userLocation]}
                </LinkButton>
              </li>
              <li className="dismiss">
                <LinkButton
                  hasIcon={true}
                  aria-label="Dismiss"
                  onClick={() => {
                    setSuppressBanner(true);
                  }}
                >
                  <XIcon size={24} type="fill" />
                </LinkButton>
              </li>
            </ul>
          </Banner>
        )}
      <main className="content-wrapper">
        <header>
          <h1>Emergency Service Phone Numbers</h1>

          <CountrySelect
            value={currentCountryId}
            onChange={(value) => {
              setSuppressBanner(true);
              setCurrentCountryId(value as keyof typeof SERVICES);
            }}
          />
        </header>
        <CountryCard id={currentCountryId} />
      </main>
      <Footer />
    </div>
  );
}

function Banner({ children }: { children: React.ReactNode }) {
  return (
    <aside className="banner">
      <div className="content-wrapper">{children}</div>
    </aside>
  );
}

export default App;
