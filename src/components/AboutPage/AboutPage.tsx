import { SERVICES } from "../../constants/emergency-services";
import styles from "./AboutPage.module.css";
import Footer from "../Footer";

function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <h1>About</h1>
        <p>
          At about 11:30pm on a random Sunday night, my wife got an emergency
          call from a family member in distress; they were far away, immobile,
          and needed urgent medical help. Someone from the US might leap to call
          911, but some countries use other phone numbers.
        </p>
        <h3>
          This web site is to help people get in touch with emergency services,
          anywhere in the world.
        </h3>
        <p>
          It's awful not knowing how to call an ambulance when you really need
          one, so I made this tool to help anyone in a similar situation. In a
          moment of crisis, the last thing I want to be doing is messing around
          on Google trying to find an up-to-date emergency services phone
          number.
        </p>
        <p>
          We didn't know the phone number for emergency assistance, so my wife
          called a friend in that area who works as both an emergency room
          doctor as well as an EMT. She arrived at our relative's home in 15
          minutes and provided life-saving treatment for what turned out to be
          sepsis -- typically fatal if left to run its course. Calling for help
          saved a life.
        </p>
        <h2>How many countries are supported?</h2>
        <p>{Object.keys(SERVICES).length}</p>
        <h2>Is this data trustworthy?</h2>
        <p>
          Yes. I pulled these numbers from the{" "}
          <a
            href="https://www.itu.int/net/itu-t/inrdb/e129_important_numbers.aspx"
            target="_blank"
          >
            ITU-T E.129 Important numbers
          </a>{" "}
          list, which is regularly updated and comes from a specialized
          telecommunications standards agency of the United Nations.
        </p>
        <p>
          Although these numbers are accurate, there may be even better options
          for help that aren't listed here. Calling for <em>local</em> help is
          almost always better than going through a national call center, but
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
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
