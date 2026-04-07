import React from "react";
import { SERVICES } from "../../constants/emergency-services";
import { COUNTRY_NAMES, DEFAULT_COUNTRY } from "../../constants";
import { getCountryFromPath } from "../../utils/url";

import "./App.css";
import CountrySelect from "../CountrySelect";
import CountryCard from "../CountryCard";
import Footer from "../Footer";
import useLocalStorage from "../../hooks/use-local-storage";
import Disclaimer from "../Disclaimer";
import TextLink from "../TextLink";
import Flag from "../Flag";

function App({ initialCountry }: { initialCountry?: string }) {
  const [currentCountryId, setCurrentCountryId] = React.useState<
    keyof typeof COUNTRY_NAMES
  >(
    () =>
      (initialCountry as keyof typeof COUNTRY_NAMES) ??
      getCountryFromPath(window.location.pathname) ??
      DEFAULT_COUNTRY,
  );

  const [userLocation, setUserLocation] = React.useState<
    keyof typeof SERVICES | null
  >(null);

  const [agreedToTerms, setAgreedToTerms] = useLocalStorage(
    "agreedToTerms",
    "never",
  );

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

  const isUserLocated = userLocation !== null;
  const isUserLocationInDirectory = isUserLocated && userLocation in SERVICES;
  const isPageUserLocation = isUserLocated && currentCountryId === userLocation;

  // Sync URL whenever currentCountryId changes
  React.useEffect(() => {
    const countryPage = `/${currentCountryId.toLowerCase()}/`;
    if (window.location.pathname !== countryPage) {
      history.pushState({}, "", countryPage);
      window.dispatchEvent(new Event("locationchange"));
    }
  }, [currentCountryId]);

  // Update title when currentCountryId changes
  React.useEffect(() => {
    if (currentCountryId in COUNTRY_NAMES) {
      document.title = `Emergency Service Phone Numbers for ${COUNTRY_NAMES[currentCountryId]}`;
    }
  }, [currentCountryId]);

  // Keep state in sync when the user navigates with browser back/forward.
  React.useEffect(() => {
    const handlePopState = () => {
      const countryFromPath = getCountryFromPath(window.location.pathname);
      if (countryFromPath) {
        setCurrentCountryId(countryFromPath);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="page-wrapper">
      <header>
        <div className="content-wrapper">
          <h1>Emergency Service Phone Numbers</h1>
          {agreedToTerms && agreedToTerms !== "never" && (
            <>
              <div className="country-select">
                <CountrySelect
                  value={currentCountryId}
                  onChange={(value) => {
                    setCurrentCountryId(value as keyof typeof SERVICES);
                  }}
                />
                {!isUserLocated && (
                  <div className="country-jump-link">
                    <span>&nbsp;</span>
                  </div>
                )}
                {isUserLocationInDirectory && !isPageUserLocation && (
                  <div className="country-jump-link">
                    <TextLink
                      href={`/${userLocation.toLowerCase()}/`}
                      icon={<Flag country={userLocation} height={14} />}
                      onClick={(e) => {
                        e.preventDefault();

                        setCurrentCountryId(userLocation);
                      }}
                      hidden={
                        userLocation === null ||
                        !(userLocation in SERVICES) ||
                        currentCountryId === userLocation
                      }
                      aria-label={`Looking for info for ${COUNTRY_NAMES[userLocation]}?`}
                    >
                      {`Looking for info for ${COUNTRY_NAMES[userLocation]}?`
                        .split("")
                        .map((letter, index) => (
                          <span
                            aria-hidden="true"
                            style={
                              { "--stagger": index } as React.CSSProperties
                            }
                            className="letter"
                            key={index}
                          >
                            {letter === " " ? "\u00A0" : letter}
                          </span>
                        ))}
                    </TextLink>
                  </div>
                )}
              </div>
            </>
          )}

          {agreedToTerms && agreedToTerms === "never" && (
            <Disclaimer
              agree={() => {
                setAgreedToTerms(Date.now().toString());
                window.scroll({ top: 0, behavior: "instant" });
              }}
            />
          )}
        </div>
      </header>
      {agreedToTerms && agreedToTerms !== "never" && (
        <main className="content-wrapper">
          <CountryCard id={currentCountryId} />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
