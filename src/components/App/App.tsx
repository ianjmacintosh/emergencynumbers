import React from "react";
import { flushSync } from "react-dom";
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

  const navIndexRef = React.useRef<number>(
    (history.state as { index?: number } | null)?.index ?? 0,
  );

  // Ensure the initial history entry has a nav index for back/forward detection
  React.useEffect(() => {
    if ((history.state as { index?: number } | null)?.index === undefined) {
      history.replaceState({ index: 0 }, "");
    }
  }, []);

  const transitionToCountry = React.useCallback(
    (
      newCountry: keyof typeof COUNTRY_NAMES,
      direction: "forward" | "backward" = "forward",
    ) => {
      document.documentElement.dataset.navDirection = direction;
      if ("startViewTransition" in document) {
        (
          document as Document & {
            startViewTransition: (cb: () => void) => void;
          }
        ).startViewTransition(() => {
          flushSync(() => setCurrentCountryId(newCountry));
        });
      } else {
        setCurrentCountryId(newCountry);
      }
    },
    [],
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

  const countryJumpLinkText =
    isUserLocated && isUserLocationInDirectory
      ? `Looking for info for ${COUNTRY_NAMES[userLocation]}?`
      : "";

  // Sync URL whenever currentCountryId changes
  React.useEffect(() => {
    const countryPage = `/${currentCountryId.toLowerCase()}/`;
    if (window.location.pathname !== countryPage) {
      const newIndex = navIndexRef.current + 1;
      navIndexRef.current = newIndex;
      history.pushState({ index: newIndex }, "", countryPage);
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
        const newIndex =
          (history.state as { index?: number } | null)?.index ?? 0;
        const direction =
          newIndex < navIndexRef.current ? "backward" : "forward";
        navIndexRef.current = newIndex;
        transitionToCountry(countryFromPath, direction);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [transitionToCountry]);

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
                    transitionToCountry(value as keyof typeof SERVICES);
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
                      icon={
                        <Flag
                          country={userLocation}
                          height={14}
                          style={
                            {
                              "--stagger": countryJumpLinkText.length + 1,
                            } as React.CSSProperties
                          }
                        />
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        transitionToCountry(userLocation);
                      }}
                      hidden={
                        userLocation === null ||
                        !(userLocation in SERVICES) ||
                        currentCountryId === userLocation
                      }
                      aria-label={countryJumpLinkText}
                    >
                      {countryJumpLinkText.split("").map((letter, index) => (
                        <span
                          aria-hidden="true"
                          style={{ "--stagger": index } as React.CSSProperties}
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
        <main className="country-card-transition">
          <div className="content-wrapper">
            <CountryCard id={currentCountryId} />
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
