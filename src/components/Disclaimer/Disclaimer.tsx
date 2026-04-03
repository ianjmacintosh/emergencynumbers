import LinkButton from "../LinkButton";
import "./Disclaimer.css";
import React from "react";

const DisclaimerText = ({ buttonVisible = false }) => {
  const COPY = [
    <>
      This directory is a free informational tool made in good faith to help
      travelers find emergency service phone numbers faster than navigating
      through official government or embassy websites to answer{" "}
      <em>"What's the number for 911 here?"</em>
    </>,
    <>
      This website is <strong>NOT</strong> an official resource, it is{" "}
      <strong>NOT</strong> government-affiliated, and it is <strong>NOT</strong>{" "}
      guaranteed to be accurate or up-to-date.
    </>,
    <>
      The data here was compiled from high-quality sources and last updated
      March 2026, but emergency services and phone numbers can change at any
      time without notice. All information is provided "as is" and without
      warranty. Always verify information with local authorities, and be aware
      that each phone system may require dialing instructions not listed here.
    </>,
    <>
      By using this tool
      {buttonVisible && (
        <>
          {" "}
          and clicking <strong>AGREE</strong>
        </>
      )}
      , you understand and accept these limitations and (to the fullest extent
      permitted by law) release this tool's authors from liability for any
      delays, damages, losses, or other consequences arising from its use.
    </>,
  ];
  return (
    <>
      {COPY.map((copy, index) => (
        <p key={index} style={{ "--stagger": index }}>
          {copy}
        </p>
      ))}
    </>
  );
};

function Disclaimer({ agree }: { agree: () => void }) {
  const disableDelay = 500;
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    const allowAgreeing = window.setTimeout(() => {
      setDisabled(false);
    }, disableDelay);

    return () => {
      clearTimeout(allowAgreeing);
    };
  }, []);
  return (
    <aside className="disclaimer" aria-labelledby="disclaimer-title">
      <h2 id="disclaimer-title">Legal Disclaimer</h2>
      <DisclaimerText buttonVisible={true} />
      <p>
        <LinkButton
          className="primary-button"
          disabled={disabled}
          style={{ "--delay": disableDelay }}
          onClick={() => {
            agree();
          }}
        >
          Agree
        </LinkButton>
      </p>
    </aside>
  );
}

export { DisclaimerText };

export default Disclaimer;
