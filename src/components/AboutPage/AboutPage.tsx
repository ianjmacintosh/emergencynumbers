import { ArrowLeftIcon } from "@phosphor-icons/react";
import { SERVICES } from "../../constants/emergency-services";
import Footer from "../Footer";
import LinkButton from "../LinkButton";
import TextLink from "../TextLink";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="page-wrapper">
      <main className="content-wrapper">
        <BackButton />
        <h1>About</h1>
        <article>
          <p>
            At about 11:30pm on a random Sunday night, my wife got an unexpected
            phone call from a family member who was hours away, immobile, and
            needed urgent medical help. We were all in Brazil and 911 isn't
            universal, so we didn't know what phone number to call.
          </p>
          <p>
            <strong>
              I built this web site to help people get in touch with emergency
              services, anywhere in the world.
            </strong>
          </p>
          <p>
            It's awful not knowing how to call an ambulance when you{" "}
            <em>really</em> need one, so I made this tool to help anyone in a
            similar situation. In a moment of crisis, the last thing I want to
            be doing is messing around on Google trying to find an up-to-date
            emergency services phone number.
          </p>
        </article>
        <hr />
        <article>
          <h2>How do I save this directory for when I actually need it?</h2>
          <p>
            Bookmark this site. If you're on a mobile device you can add this
            page to your home screen by following these instructions:
          </p>
          <h3>iOS Safari</h3>
          <ol>
            <li>Click the three dots on the bottom right</li>
            <li>Click "Share"</li>
            <li>Click "View More" (it's the big button on the bottom right)</li>
            <li>Click "Add to Home Screen"</li>
          </ol>
          <h3>Android Chrome</h3>
          <ol>
            <li>Click the three dots on the top right</li>
            <li>Click "Add to Home Screen"</li>
          </ol>
        </article>
        <hr />
        <article>
          <h2>How many countries are supported?</h2>
          <p>
            {Object.keys(SERVICES).length}. This site provides emergency service
            phone numbers for {Object.keys(SERVICES).length} different countries
            and territories.
          </p>
        </article>
        <hr />
        <article>
          <h2>Can I use or modify this tool's source code?</h2>
          <p>
            Yes. The GitHub repo is{" "}
            <TextLink
              href="https://github.com/ianjmacintosh/emergencynumbers"
              target="_blank"
            >
              ianjmacintosh/emergencynumbers
            </TextLink>
            , but some phone number data is intellectual property of ITU-T, and
            commercial use would require their explicit permission. The ITU-T's{" "}
            <TextLink
              href="https://www.itu.int/en/about/Pages/terms-of-use.aspx"
              target="_blank"
            >
              terms of use
            </TextLink>{" "}
            grant permission to use content for personal, educational, and
            non-commercial use so long as you acknowledge the source and
            maintain all copyright and other proprietary notices. Data sourced
            from GOV.UK is licensed under the{" "}
            <TextLink
              href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
              target="_blank"
            >
              Open Government Licence
            </TextLink>{" "}
            which permits use with attribution.
          </p>
        </article>
        <hr />
        <article>
          <h2>So what happened with your relative?</h2>
          <p>
            My wife called a friend in that area who works as an emergency room
            doctor and volunteers for EMT shifts monthly. She arrived at our
            relative's home in 15 minutes and provided life-saving treatment for
            what turned out to be sepsis -- typically fatal if left to run its
            course. Calling for help saved a life.
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
      <ArrowLeftIcon size={24} /> Back to directory
    </LinkButton>
  );
}

export default AboutPage;
