import styles from "./Footer.module.css";
import TextLink from "../TextLink";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <TextLink href="/">Home</TextLink> |{" "}
        <TextLink href="/about">About this project</TextLink>
      </p>
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
