import { ArrowLeftIcon } from "@phosphor-icons/react";
import Footer from "../../components/Footer";
import LinkButton from "../../components/LinkButton";
import "../TextPages.css";
import { DisclaimerText } from "../../components/Disclaimer";

function AboutPage() {
  return (
    <div className="page-wrapper">
      <main className="content-wrapper">
        <BackButton />
        <h1>Terms and Conditions</h1>
        <article>
          <DisclaimerText />
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
      lastPage.includes("about") === false
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
