import "./Footer.css";
import TextLink from "../TextLink";

function Footer() {
  return (
    <footer className="footer">
      <div className="content-wrapper">
        <nav>
          <ul>
            <li>
              <TextLink href="/about/">About this directory</TextLink>
            </li>
            <li>
              <TextLink href="/terms/">Terms and Conditions</TextLink>
            </li>
            <li>
              <TextLink href="/credits/">Site Credits</TextLink>
            </li>
          </ul>
        </nav>
        <p>
          &copy; 2026{" "}
          <TextLink href="https://www.ianjmacintosh.com/" target="_blank">
            Ian J. MacIntosh
          </TextLink>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
