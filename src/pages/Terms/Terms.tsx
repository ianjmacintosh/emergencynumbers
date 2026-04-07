import { ArrowLeftIcon } from "@phosphor-icons/react";
import Footer from "../../components/Footer";
import LinkButton from "../../components/LinkButton";
import "../TextPages.css";
import { DisclaimerText } from "../../components/Disclaimer";
import TextLink from "../../components/TextLink";

function AboutPage() {
  return (
    <div className="page-wrapper">
      <main className="content-wrapper">
        <BackButton />
        <h1>Terms and Conditions</h1>
        <article>
          <DisclaimerText />
          <p>
            This directory is possible thanks to the first responders providing
            emergency services and their associated official organizations that
            make emergency service phone number information publicly available
            for the common good.
          </p>
          <p>
            This site is in no way affiliated with, endorsed by, or approved by
            any of the sources used to build this directory:
          </p>
          <ul>
            <li>ITU-T</li>
            <li>GOV.UK</li>
            <li>Visit Åland</li>
            <li>Rega (Swiss Air-Rescue)</li>
            <li>Government of Jersey</li>
            <li>Australian Government</li>
            <li>States of Guernsey</li>
            <li>Christmas Island Emergency Management</li>
            <li>Government of Canada</li>
            <li>Government of South Georgia &amp; South Sandwich Islands</li>
            <li>Isle of Man Ambulance Service</li>
            <li>Isle of Man Constabulary</li>
            <li>Isle of Man Fire and Rescue Service</li>
          </ul>
          <p>
            Where applicable, this site contains public sector information
            licensed under the{" "}
            <TextLink
              href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
              target="_blank"
            >
              Open Government Licence v3.0
            </TextLink>{" "}
            (and equivalent versions for Crown Dependencies and territories).
            For Isle of Man sources, equivalent terms apply under the Isle of
            Man Open Government Licence.
          </p>
        </article>
        <BackButton />
      </main>
      <Footer />
    </div>
  );
}

function BackButton() {
  const goToPreviousPage = () => {
    // By default, our next page will be "/"
    let nextPage = "/";

    const lastPage = document.referrer;
    // Unless (!) the last page was both...
    if (
      // A) From this site
      lastPage.includes(window.location.hostname) &&
      // And B) Not also the page.
      lastPage.includes("about") === false &&
      lastPage.includes("terms") === false
    ) {
      // Then in that case, we'll go back to that page
      nextPage = lastPage;
    }

    // Go!
    location.href = nextPage;
  };

  return (
    <LinkButton className="icon-button" onClick={goToPreviousPage}>
      <ArrowLeftIcon size={24} />{" "}
      <span className="updog">Back to directory</span>
    </LinkButton>
  );
}

export default AboutPage;
