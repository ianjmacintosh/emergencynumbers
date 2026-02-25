import styles from "./Footer.module.css";
import TextLink from "../TextLink";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <TextLink href="/">Home</TextLink> |{" "}
        <TextLink href="/about/">About this project</TextLink>
      </nav>
      <p>
        &copy; 2026{" "}
        <TextLink href="https://www.ianjmacintosh.com/" target="_blank">
          Ian J. MacIntosh
        </TextLink>
      </p>
    </footer>
  );
}

export default Footer;
