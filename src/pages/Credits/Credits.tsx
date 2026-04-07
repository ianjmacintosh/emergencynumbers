import { ArrowLeftIcon } from "@phosphor-icons/react";
import Footer from "../../components/Footer";
import LinkButton from "../../components/LinkButton";
import TextLink from "../../components/TextLink";
import "../TextPages.css";

function AboutPage() {
  return (
    <div className="page-wrapper">
      <main className="content-wrapper">
        <BackButton />
        <h1>Site Credits</h1>
        <article>
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
