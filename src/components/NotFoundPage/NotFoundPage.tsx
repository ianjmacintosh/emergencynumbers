import { HouseIcon } from "@phosphor-icons/react";
import Footer from "../Footer";
import LinkButton from "../LinkButton";
import TextLink from "../TextLink";

function NotFoundPage() {
  return (
    <div className="page-wrapper">
      <main className="content-wrapper">
        <LinkButton
          className="icon-button"
          onClick={() => (location.href = "/")}
        >
          <HouseIcon size={24} /> Go Home
        </LinkButton>
        <h1>Page Not Found</h1>
        <p>The page you tried to visit doesn't exist.</p>
        <p>
          If you're searching for emergency service phone numbers, go to the{" "}
          <TextLink href="/">Homepage</TextLink> which will guess your country
          and load the page associated with it.
        </p>
        <p>
          If the homepage does not work, you can visit the{" "}
          <TextLink href="/us/">United States</TextLink> information page and
          try to navigate from there.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
