import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy; 2026 Ian J. MacIntosh</p>
      <p>
        Phone number content from{" "}
        <a
          href="https://www.itu.int/en/about/Pages/terms-of-use.aspx"
          target="_blank"
        >
          ITU-T E.129
        </a>{" "}
        used with permission for non-commercial purposes
      </p>
    </div>
  );
}

export default Footer;
