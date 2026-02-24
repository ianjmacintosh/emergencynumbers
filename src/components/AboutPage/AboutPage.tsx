import { SERVICES } from "../../constants/emergency-services";
import styles from "./AboutPage.module.css";
import Footer from "../Footer";

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
        <h2>Is this data trustworthy?</h2>
        <p>
          Yes. I pulled these numbers from the{" "}
          <a
            href="https://www.itu.int/net/itu-t/inrdb/e129_important_numbers.aspx"
            target="_blank"
          >
            ITU-T E.129 Important numbers
          </a>{" "}
          list, which is maintained by a specialized agency of the United
          Nations responsible for telecommunications standards.
        </p>
        <p>
          Although these phone numbers are accurate, there may be even better
          options for help that aren't listed here. Calling a local number
          directly is often better than going through a national system, but
          calling anyone is better than calling no one, especially when minutes
          count.
        </p>
        <h2>Can I use or modify this tool's source code?</h2>
        <p>
          Yes. The GitHub repo is{" "}
          <a
            href="https://github.com/ianjmacintosh/emergencynumbers"
            target="_blank"
          >
            ianjmacintosh/emergencynumbers
          </a>
          , but the phone number data is intellectual property of ITU-T, and
          commercial use would require their explicit permission. Their{" "}
          <a
            href="https://www.itu.int/en/about/Pages/terms-of-use.aspx"
            target="_blank"
          >
            terms of use
          </a>{" "}
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
