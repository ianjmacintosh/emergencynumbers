import { ArrowLeftIcon } from "@phosphor-icons/react";
import { SERVICES } from "../../constants/emergency-services";
import Footer from "../../components/Footer";
import LinkButton from "../../components/LinkButton";
import TextLink from "../../components/TextLink";
import "../TextPages.css";

function AboutPage() {
  return (
    <div className="page-wrapper">
      <main className="content-wrapper">
        <BackButton />
        <h1>About this directory</h1>
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
          <h2>How many countries does this tool cover?</h2>
          <p>
            {Object.keys(SERVICES).length} countries and territories are
            supported.
          </p>
        </article>
        <hr />
        <article>
          <h2>Where did you get this data?</h2>
          <p>
            Mostly from the{" "}
            <TextLink
              href="https://www.itu.int/net/itu-t/inrdb/e129_important_numbers.aspx"
              target="_blank"
            >
              ITU-T E.129 Important numbers
            </TextLink>{" "}
            list, which is maintained by a specialized agency of the United
            Nations responsible for telecommunications standards, as well as{" "}
            <TextLink
              href="https://www.gov.uk/foreign-travel-advice"
              target="_blank"
            >
              GOV.UK's Foreign travel advice
            </TextLink>
            to provide information for countries absent from the ITU-T E.129's
            list. For the remaining missing countries and territories, I
            consulted their government's online resources.
          </p>
          <table>
            <thead>
              <tr>
                <th>Source</th>
                <th>Services</th>
                <th>% of Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ITU-T E.129</td>
                <td>1,257</td>
                <td>85.9%</td>
              </tr>
              <tr>
                <td>GOV.UK</td>
                <td>193</td>
                <td>13.2%</td>
              </tr>
              <tr>
                <td>
                  Individual governments<sup>1</sup>
                </td>
                <td>13</td>
                <td>0.9%</td>
              </tr>
              <tr>
                <td>Rega</td>
                <td>1</td>
                <td>&lt;0.1%</td>
              </tr>
              <tr>
                <td>Visit Åland</td>
                <td>1</td>
                <td>&lt;0.1%</td>
              </tr>
              <tr>
                <th>Total</th>
                <td>1,465</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <p>
            <small>
              <sup>1</sup> Individual governments: Government of Jersey,
              Australian Government, States of Guernsey, Christmas Island
              Emergency Management, Government of Canada, Government of South
              Georgia &amp; South Sandwich Islands, Isle of Man Ambulance
              Service, Isle of Man Constabulary, Isle of Man Fire and Rescue
              Service
            </small>
          </p>
        </article>
        <hr />
        <article>
          <h2>
            Why do you claim to provide critical information and then tell me
            not to trust it?
          </h2>
          <p>
            Due to the serious context, I figured it was better to remind folks
            that this is second-hand information. It's unlikely these phone
            numbers will change frequently, but it could happen. I'd rather
            cover for that edge case and remind people that I'm not an official
            source instead of having them keep calling a decommissioned phone
            number in an emergency situation.
          </p>
        </article>
        <hr />
        <article>
          <h2>
            Why doesn't this site just link people directly to official sources?
          </h2>
          <p>
            While more likely to be accurate, government sites typically have a
            lot of other unrelated information that a person in a crisis would
            need to filter through. I wanted to make a tool where people could
            quickly get emergency service phone numbers for wherever they are,
            without having to spend time navigating through pages and pages of
            bespoke and novel information architecture.
          </p>
        </article>
        <hr />
        <article>
          <h2>Can I use or modify this tool's source code?</h2>
          <p>
            Yes. The source code is available on GitHub at{" "}
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
      <ArrowLeftIcon size={24} />{" "}
      <span className="updog">Back to directory</span>
    </LinkButton>
  );
}

export default AboutPage;
