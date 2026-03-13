import "./Footer.css";
import TextLink from "../TextLink";

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <p>
          <TextLink href="/">Home</TextLink> |{" "}
          <TextLink href="/about/">About this project</TextLink>
        </p>
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
