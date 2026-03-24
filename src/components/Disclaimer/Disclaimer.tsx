import LinkButton from "../LinkButton";

const DisclaimerText = ({ buttonVisible = false }) => {
  return (
    <>
      <p>
        This directory is a free informational tool made in good faith to help
        travelers find emergency service phone numbers faster than navigating
        through official government or embassy websites to answer{" "}
        <em>"What's the number for 911 here?"</em>
      </p>
      <p>
        This website is <strong>NOT</strong> an official resource, it is{" "}
        <strong>NOT</strong> government-affiliated, and it is{" "}
        <strong>NOT</strong> guaranteed to be accurate or up-to-date. It was
        compiled from high-quality official sources and last updated March 2026,
        but emergency services and phone numbers can change at any time without
        notice. Information is provided "as is" and without any warranty. Always
        verify information with local authorities, and be aware that different
        phone systems may require dialing instructions not listed here.
      </p>
      <p>
        By using this tool
        {buttonVisible && (
          <>
            and clicking <strong>AGREE</strong>
          </>
        )}
        , you understand and accept these limitations and (to the fullest extent
        permitted by law) release the developers from liability for any delays,
        damages, losses, or other consequences arising from its use.
      </p>
    </>
  );
};

function Disclaimer({ agree }: { agree: () => void }) {
  return (
    <aside className="disclaimer" aria-labelledby="disclaimer-title">
      <h2 id="disclaimer-title">Legal Disclaimer</h2>
      <DisclaimerText buttonVisible={true} />
      <ul className="actions">
        <li>
          <LinkButton
            onClick={() => {
              agree();
            }}
          >
            Agree
          </LinkButton>
        </li>
      </ul>
    </aside>
  );
}

export { DisclaimerText };

export default Disclaimer;
