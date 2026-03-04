import { SERVICES } from "../../constants/emergency-services";
import styles from "./AboutPage.module.css";
import Footer from "../Footer";
import TextLink from "../TextLink";

function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.contentWrapper} role="main">
        <h1>About</h1>
        <p>
          At about 11:30pm on a random Sunday night, my wife got an unexpected
          phone call from a family member who was hours away, immobile, and
          needed urgent medical help. We were all in Brazil and 911 isn't
          universal, so we didn't know what phone number to call.
        </p>
        <h3>
          I built this web site to help people get in touch with emergency
          services, anywhere in the world.
        </h3>
        <p>
          It's awful not knowing how to call an ambulance when you{" "}
          <em>really</em> need one, so I made this tool to help anyone in a
          similar situation. In a moment of crisis, the last thing I want to be
          doing is messing around on Google trying to find an up-to-date
          emergency services phone number. I'll bookmark this site to help my
          future self in case this happens again. Feel free to do the same!
        </p>
        <h2>How many countries are supported?</h2>
        <p>
          {Object.keys(SERVICES).length}. This site provides emergency service
          phone numbers for {Object.keys(SERVICES).length} different countries
          and territories.
        </p>
        <h2>Are these phone numbers trustworthy?</h2>
        <p>
          Yes. Most of this information is from the{" "}
          <TextLink
            href="https://www.itu.int/net/itu-t/inrdb/e129_important_numbers.aspx"
            target="_blank"
          >
            ITU-T E.129 Important numbers
          </TextLink>{" "}
          list, which is maintained by a specialized agency of the United
          Nations responsible for telecommunications standards. I also used{" "}
          <TextLink
            href="https://www.gov.uk/foreign-travel-advice"
            target="_blank"
          >
            GOV.UK's Foreign travel advice
          </TextLink>
          to provide information for countries absent from the ITU-T E.129's
          list.
        </p>
        <p>
          I intentionally did not use phone number data from Wikipedia's{" "}
          <TextLink
            href="https://en.wikipedia.org/wiki/List_of_emergency_telephone_numbers"
            target="_blank"
          >
            List of emergency telephone numbers
          </TextLink>{" "}
          article because unlike the ITU-T or the UK's FCDO office, no
          accountable body stands behind that data. For example, that Wikipedia
          article shows two numbers for North Korea: one from a US State Dept
          document that was apparently last modified in July 2008, and another
          phone number that's been inferred from a{" "}
          <TextLink
            href="https://www.fire-engine-photos.com/picture/number39632.asp?c=ok"
            target="_blank"
          >
            photo of a supposed North Korean fire truck
          </TextLink>{" "}
          with "8119" painted on the side of it. For life and death matters, I'd
          rather not spend time on that kind of thing.
        </p>
        <p>
          Anyway, although these phone numbers are accurate, there may be even
          better options for help that aren't listed here. Calling a local
          number directly is often better than going through a national system,
          but calling anyone is better than calling no one, especially when
          minutes count.
        </p>
        <h2>Can I use or modify this tool's source code?</h2>
        <p>
          Yes. The GitHub repo is{" "}
          <TextLink
            href="https://github.com/ianjmacintosh/emergencynumbers"
            target="_blank"
          >
            ianjmacintosh/emergencynumbers
          </TextLink>
          , but the phone number data is intellectual property of ITU-T, and
          commercial use would require their explicit permission. Their{" "}
          <TextLink
            href="https://www.itu.int/en/about/Pages/terms-of-use.aspx"
            target="_blank"
          >
            terms of use
          </TextLink>{" "}
          grant permission to download, copy, and use content for personal,
          educational, and non-commercial use so long as you acknowledge the
          source and maintain all copyright and other proprietary notices.
        </p>
        <h2>So what happened with your relative?</h2>
        <p>
          My wife called a friend in that area who works as an emergency room
          doctor and volunteers for EMT shifts monthly. She arrived at our
          relative's home in 15 minutes and provided life-saving treatment for
          what turned out to be sepsis -- typically fatal if left to run its
          course! Calling for help saved a life.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
