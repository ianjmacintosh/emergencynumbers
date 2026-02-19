import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        <a href="/">Home</a> | <a href="/about">About this project</a>
      </p>
      <p>
        &copy; 2026{" "}
        <a href="https://www.ianjmacintosh.com/" target="_blank">
          Ian J. MacIntosh
        </a>
      </p>
    </div>
  );
}

export default Footer;
