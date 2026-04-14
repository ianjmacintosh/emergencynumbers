import LinkButton from "../LinkButton";
import "./Disclaimer.css";
import React from "react";

const DisclaimerText = ({ buttonVisible = false }) => {
  const COPY = [
    <>
      This directory is a free informational tool made in good faith to help
      travelers find emergency service phone numbers faster than navigating
      through official government or embassy websites to answer{" "}
      <em>“What’s the number for 911 here?”</em>
    </>,
    <>
      This website is <strong>NOT</strong> an official resource, it is{" "}
      <strong>NOT</strong> government-affiliated, and it is <strong>NOT</strong>{" "}
      guaranteed to be accurate or up-to-date.
    </>,
    <>
      The data here was compiled from high-quality sources and last updated
      March 2026, but emergency services and phone numbers can change at any
      time without notice. All information is provided “as is” and without
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
      permitted by law) release this tool’s authors from liability for any
      delays, damages, losses, or other consequences arising from its use.
    </>,
  ];
  return (
    <>
      {COPY.map((copy, index) => (
        <div className="wrapper-box" key={index}>
          <p style={{ "--stagger": index + 1 } as React.CSSProperties}>
            {copy}
          </p>
        </div>
      ))}
    </>
  );
};

function Disclaimer({ agree }: { agree: () => void }) {
  const disableDelay = 120;
  const buttonStagger = 5;
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    const allowAgreeing = window.setTimeout(
      () => {
        setDisabled(false);
      },
      disableDelay * buttonStagger - 100,
    );

    return () => {
      clearTimeout(allowAgreeing);
    };
  }, []);
  return (
    <main className="disclaimer" aria-labelledby="disclaimer-title">
      <div className="wrapper-box">
        <h2 id="disclaimer-title">Legal Disclaimer</h2>
      </div>
      <DisclaimerText buttonVisible={true} />
      <div className="wrapper-box">
        <LinkButton
          className="primary-button"
          disabled={disabled}
          style={
            {
              "--delay": disableDelay + "ms",
              "--stagger": buttonStagger,
            } as React.CSSProperties
          }
          onClick={() => {
            agree();
          }}
        >
          Agree
        </LinkButton>
      </div>
    </main>
  );
}

export { DisclaimerText };

export default Disclaimer;
