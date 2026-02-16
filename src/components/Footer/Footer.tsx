import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Phone numbers provided from multiple sources, including{" "}
        <a
          href="https://www.itu.int/en/about/Pages/terms-of-use.aspx"
          target="_blank"
        >
          ITU-T E.129
        </a>
      </p>
    </div>
  );
}

export default Footer;
