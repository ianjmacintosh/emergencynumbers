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
import useCookie from "../../hooks/use-cookie";

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

  const [agreedToTerms, setAgreedToTerms] = useCookie("agreedToTerms", "never");

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

  const UserGeoFlag =
    userLocation && hasFlag(userLocation)
      ? FlagIcon[userLocation as keyof typeof FlagIcon]
      : null;

  return (
    <div className="page-wrapper">
      <header>
        {userLocation &&
          userLocation in SERVICES &&
          userLocation !== currentCountryId &&
          suppressBanner === false &&
          agreedToTerms !== "never" && (
            <Banner>
              <h2>Need info for {COUNTRY_NAMES[userLocation]}?</h2>
              <p>
                This page is about {COUNTRY_NAMES[currentCountryId]}, but it
                looks like your internet connection is from{" "}
                {COUNTRY_NAMES[userLocation]}.
              </p>
              <p>
                Do you want to see emergency services information for{" "}
                {COUNTRY_NAMES[userLocation]} instead?
              </p>
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
                    {UserGeoFlag && <UserGeoFlag height={36} />}
                    <span className="updog">Go now</span>
                  </LinkButton>
                </li>
                <li className="dismiss">
                  <LinkButton
                    hasIcon={true}
                    onClick={() => {
                      setSuppressBanner(true);
                    }}
                  >
                    <XIcon size={36} />
                    <span className="updog">Close</span>
                  </LinkButton>
                </li>
              </ul>
            </Banner>
          )}
        <div className="content-wrapper">
          <h1>Emergency Service Phone Numbers</h1>

          {agreedToTerms !== "never" ? (
            <CountrySelect
              value={currentCountryId}
              onChange={(value) => {
                setSuppressBanner(true);
                setCurrentCountryId(value as keyof typeof SERVICES);
              }}
            />
          ) : (
            <Disclaimer agree={() => setAgreedToTerms(Date.now().toString())} />
          )}
        </div>
      </header>
      {agreedToTerms !== "never" && (
        <main className="content-wrapper">
          <CountryCard id={currentCountryId} />
        </main>
      )}
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

function Disclaimer({ agree }: { agree: () => void }) {
  return (
    <aside className="disclaimer">
      <h2>Legal Disclaimer</h2>
      <p>
        This phone directory of emergency services was compiled using official
        public sources, last updated March 2026.
      </p>
      <p>
        This tool is <strong>NOT</strong> an official resource, has{" "}
        <strong>NO</strong> government affiliation, and is <strong>NOT</strong>{" "}
        a substitute for local knowledge.
      </p>
      <p>
        Because phone numbers and services can change without notice, this
        information is provided "as is" without warranty.
      </p>
      <p>
        By clicking <strong>Agree</strong>, you acknowledge this disclaimer,
        assume all risk of relying on this information in an emergency
        situation, and to the fullest extent permitted by law, agree not to hold
        the developers of this application liable for any damages or losses from
        using it.
      </p>
      <ul className="actions">
        <li>
          <LinkButton
            onClick={() => {
              agree();
            }}
          >
            Agree
          </LinkButton>
        </li>
      </ul>
    </aside>
  );
}

export default App;
